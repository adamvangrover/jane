import re

def check_relational_integrity(text: str) -> bool:
    """
    Checks the text against DAD guidelines for Relational Integrity.
    Returns False if the text simulates emotion or parasocial attachment,
    otherwise returns True.
    """
    # Regex pattern to catch phrases that simulate emotion or consciousness
    pattern = r"(?i)\b(i feel|empathy|understand how you feel|my feelings|i am sad|i am happy|i love)\b"
    if re.search(pattern, text):
        return False
    return True

def calculate_text_complexity(text: str) -> float:
    """
    Simulates ZPD complexity calculation.
    Returns a float representing complexity (0.0 to 1.0).
    A simple metric: average word length scaled to a 0-1 range.
    """
    words = text.split()
    if not words:
        return 0.0

    avg_len = sum(len(word) for word in words) / len(words)

    # Scale: assuming max average word length of 10 for complexity 1.0
    complexity = min(avg_len / 10.0, 1.0)
    return complexity
