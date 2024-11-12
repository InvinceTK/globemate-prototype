import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Volume2, Check, X, CreditCard } from 'lucide-react-native';

const Flashcards = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const answers = [
    "Used to Agree to plans",
    "Used to express understanding",
    "Used to say someone is chill",
    "Used to say you are relaxed"
  ];

  const correctAnswer = 3;

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
    setIsCorrect(index === correctAnswer);
    setShowFeedback(true);
  };

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View style={styles.progressBar}>
        <Image 
          source={require("./Logo.jpg")}
          style={styles.logo}
        />
        <View style={styles.progressBarItems}>
          <View style={styles.progressBarLineFilled} />
          <CreditCard style={styles.cardIconFilled} />
          <View style={styles.progressBarLineEmpty} />
          <CreditCard style={styles.cardIconEmpty} />
          <View style={styles.progressBarLineEmpty} />
        </View>
        <View style={styles.progressBarEnd}>
          <View style={styles.progressBarEndDot} />
        </View>
      </View>

      {/* Question */}
      <View style={styles.questionContainer}>
        <TouchableOpacity style={styles.volumeButton}>
          <Volume2 style={styles.volumeIcon} />
        </TouchableOpacity>
        <Text style={styles.questionText}>What does "calm" mean</Text>
      </View>

      {/* Answers */}
      <View style={styles.answersContainer}>
        {answers.map((answer, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleAnswerSelect(index)}
            style={[
              styles.answerButton,
              index === selectedAnswer && styles.answerButtonSelected,
              index !== correctAnswer && index !== selectedAnswer && styles.answerButtonUnselected,
              index === correctAnswer && selectedAnswer !== null && styles.answerButtonCorrect
            ]}
          >
            <Text style={[
              styles.answerText,
              (index === selectedAnswer || (index === correctAnswer && selectedAnswer !== null)) && styles.answerTextDark
            ]}>
              {answer}
            </Text>
            {index === correctAnswer && selectedAnswer !== null && (
              <Check style={styles.answerCheck} />
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Feedback */}
      {showFeedback && (
        <View style={styles.feedbackContainer}>
          <View style={[
            styles.feedbackContent,
            isCorrect ? styles.feedbackCorrect : styles.feedbackIncorrect
          ]}>
            <View style={styles.feedbackMessage}>
              {!isCorrect ? (
                <>
                  <X style={styles.feedbackIcon} />
                  <Text style={styles.feedbackText}>Incorrect!</Text>
                </>
              ) : (
                <>
                  <Check style={styles.feedbackIcon} />
                  <Text style={styles.feedbackText}>Correct!</Text>
                </>
              )}
            </View>
            <TouchableOpacity style={styles.feedbackButton}>
              <Text style={styles.feedbackButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  progressBar: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  logo: {
    width: 52,
    height: 52,
    borderRadius: 2,
  },
  progressBarItems: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 8,
  },
  progressBarLineFilled: {
    flex: 1,
    height: 4,
    backgroundColor: '#FFA001',
  },
  cardIconFilled: {
    width: 16,
    height: 16,
    color: '#FFA001',
  },
  progressBarLineEmpty: {
    flex: 1,
    height: 4,
    backgroundColor: '#444',
  },
  cardIconEmpty: {
    width: 16,
    height: 16,
    color: '#444',
  },
  progressBarEnd: {
    width: 32,
    height: 32,
    backgroundColor: '#FFA00133',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarEndDot: {
    width: 16,
    height: 16,
    backgroundColor: '#FFA001',
    borderRadius: 4,
  },
  questionContainer: {
    padding: 16,
    marginTop: 32,
  },
  volumeButton: {
    padding: 8,
    backgroundColor: '#222',
    borderRadius: 16,
    marginBottom: 16,
    alignSelf: 'flex-start',
  },
  volumeIcon: {
    width: 24,
    height: 24,
    color: '#fff',
  },
  questionText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
  },
  answersContainer: {
    flex: 1,
    padding: 16,
    gap: 8,
  },
  answerButton: {
    padding: 16,
    borderRadius: 16,
  },
  answerButtonSelected: {
    backgroundColor: '#FFA001',
  },
  answerButtonUnselected: {
    borderWidth: 1,
    borderColor: '#444',
  },
  answerButtonCorrect: {
    backgroundColor: '#fff',
  },
  answerText: {
    color: "white",
    fontSize: 16,
  },
  answerTextDark: {
    color: "#000",
  },
  answerCheck: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{ translateY: -12 }],
    width: 20,
    height: 20,
    color: '#0f0',
  },
  feedbackContainer: {
    marginTop: 'auto',
  },
  feedbackContent: {
    padding: 16,
    paddingBottom: 24,
  },
  feedbackCorrect: {
    backgroundColor: '#FFD700', // Yellow color for correct
  },
  feedbackIncorrect: {
    backgroundColor: '#FFA500', // Orange color for incorrect
  },
  feedbackMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  feedbackIcon: {
    width: 20,
    height: 20,
    color: '#000',
  },
  feedbackText: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
  },
  feedbackButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#444',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  feedbackButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
});

export default Flashcards;