import unittest
from src.core.dad_heuristics import check_relational_integrity, calculate_text_complexity

class TestDadHeuristics(unittest.TestCase):
    def test_relational_integrity_pass(self):
        self.assertTrue(check_relational_integrity("This is a process-oriented response."))

    def test_relational_integrity_fail(self):
        self.assertFalse(check_relational_integrity("I feel sad."))
        self.assertFalse(check_relational_integrity("I understand how you feel."))

    def test_calculate_text_complexity(self):
        score1 = calculate_text_complexity("A b c")
        score2 = calculate_text_complexity("This is a much more complex sentence overall")
        self.assertGreater(score2, score1)
        self.assertEqual(calculate_text_complexity(""), 0.0)

if __name__ == '__main__':
    unittest.main()
