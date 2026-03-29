import json
import os
import re

class MemoryManager:
    """
    Manages longitudinal context and Zone of Proximal Development (ZPD) metrics.
    Responsible for session initialization, updates, and memory management.
    """

    def __init__(self, memory_file="MEMORY.md"):
        self.memory_file = memory_file
        self.zpd_level = 0.6  # Default start
        self.frustration_markers = 0
        self.mastery_markers = 0
        self.success_rate = 0.5
        self._load_memory()

    def _load_memory(self):
        """Loads state from a JSON block within MEMORY.md, defaulting gracefully."""
        if not os.path.exists(self.memory_file):
            return

        try:
            with open(self.memory_file, 'r', encoding='utf-8') as f:
                content = f.read()

            # Look for a JSON block representing the state
            match = re.search(r'```json\n(.*?)\n```', content, re.DOTALL)
            if match:
                state = json.loads(match.group(1))
                self.zpd_level = state.get("zpd_level", self.zpd_level)
                self.frustration_markers = state.get("frustration_markers", self.frustration_markers)
                self.mastery_markers = state.get("mastery_markers", self.mastery_markers)
                self.success_rate = state.get("success_rate", self.success_rate)
        except Exception as e:
            print(f"[MemoryManager Warning] Failed to parse memory file: {e}. Using defaults.")

    def get_zpd_level(self) -> float:
        """
        Retrieves the current ZPD level for the user.
        """
        return self.zpd_level

    def update_metrics(self, frustration: bool = False, mastery: bool = False, success: bool = False):
        """
        Dynamically adjusts task difficulty based on real-time feedback.
        - Decrease abstraction by 15% on high frustration.
        - Increase complexity by 20% on immediate mastery.
        """
        if frustration:
            self.frustration_markers += 1
            if self.frustration_markers >= 2:  # Threshold
                self.zpd_level = max(0.1, self.zpd_level * 0.85)
                self.frustration_markers = 0 # Reset

        if mastery:
            self.mastery_markers += 1
            if self.mastery_markers >= 2:
                self.zpd_level = min(1.0, self.zpd_level * 1.20)
                self.mastery_markers = 0

        # Simple moving average for success rate
        val = 1.0 if success else 0.0
        self.success_rate = (self.success_rate * 0.8) + (val * 0.2)

        self._log_to_memory()

    def _log_to_memory(self):
        """
        Appends all verified decisions and ZPD metrics to MEMORY.md
        """
        state = {
            "zpd_level": round(self.zpd_level, 3),
            "frustration_markers": self.frustration_markers,
            "mastery_markers": self.mastery_markers,
            "success_rate": round(self.success_rate, 3)
        }

        try:
            content = ""
            if os.path.exists(self.memory_file):
                with open(self.memory_file, 'r', encoding='utf-8') as f:
                    content = f.read()

            # Replace existing JSON block or append a new one
            state_json = json.dumps(state, indent=2)
            block = f"```json\n{state_json}\n```"

            if "```json" in content:
                new_content = re.sub(r'```json\n.*?\n```', block, content, flags=re.DOTALL)
            else:
                new_content = content + f"\n\n## Automated System State\n{block}\n"

            with open(self.memory_file, 'w', encoding='utf-8') as f:
                f.write(new_content)
        except Exception as e:
            print(f"[MemoryManager Error] Could not save state to {self.memory_file}: {e}")
