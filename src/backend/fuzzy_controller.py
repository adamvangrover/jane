import numpy as np
import skfuzzy as fuzz
from skfuzzy import control as ctrl

class FuzzyZPDController:
    def __init__(self):
        # Antecedents (Inputs)
        self.frustration = ctrl.Antecedent(np.arange(0, 11, 1), 'frustration')
        self.mastery = ctrl.Antecedent(np.arange(0, 11, 1), 'mastery')

        # Consequent (Output)
        self.scaffolding_level = ctrl.Consequent(np.arange(0, 1.1, 0.1), 'scaffolding_level')

        # Membership Functions (Fuzzy Sets)
        self.frustration.automf(3) # poor, average, good (mapped to low, medium, high internally)
        self.mastery.automf(3)

        self.scaffolding_level['direct_support'] = fuzz.trimf(self.scaffolding_level.universe, [0, 0, 0.5])
        self.scaffolding_level['partial_hint'] = fuzz.trimf(self.scaffolding_level.universe, [0, 0.5, 1])
        self.scaffolding_level['socratic'] = fuzz.trimf(self.scaffolding_level.universe, [0.5, 1, 1])

        # Rules
        rule1 = ctrl.Rule(self.frustration['good'], self.scaffolding_level['direct_support']) # 'good' here implies 'high'
        rule2 = ctrl.Rule(self.mastery['good'], self.scaffolding_level['socratic'])
        rule3 = ctrl.Rule(self.frustration['average'] & self.mastery['average'], self.scaffolding_level['partial_hint'])

        self.zpd_ctrl = ctrl.ControlSystem([rule1, rule2, rule3])
        self.zpd_sim = ctrl.ControlSystemSimulation(self.zpd_ctrl)

    def compute_scaffolding(self, frustration_score: int, mastery_score: int) -> str:
        """
        Computes the recommended scaffolding level based on real-time interaction metrics.
        """
        self.zpd_sim.input['frustration'] = frustration_score
        self.zpd_sim.input['mastery'] = mastery_score

        try:
            self.zpd_sim.compute()
            output_val = self.zpd_sim.output['scaffolding_level']

            if output_val < 0.33:
                return "direct_support"
            elif output_val < 0.66:
                return "partial_hint"
            else:
                return "socratic"
        except Exception:
             return "partial_hint" # Safe fallback

if __name__ == "__main__":
    controller = FuzzyZPDController()
    print("Test High Frustration:", controller.compute_scaffolding(9, 1))
    print("Test High Mastery:", controller.compute_scaffolding(1, 9))
