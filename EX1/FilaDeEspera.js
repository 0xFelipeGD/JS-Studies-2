/**
 * Medical Office Queue System
 *
 * A JavaScript program that simulates a waiting queue management system for a medical office.
 * The system provides an interactive menu interface to manage patient queues with the following functionality:
 *
 * Features:
 * - Display current queue with patient positions (1st, 2nd, 3rd, etc.)
 * - Add new patients to the end of the queue
 * - Remove and consult the first patient in line
 * - Interactive menu system that continues until explicitly terminated
 *
 * Menu Options:
 * - "New patient": Prompts for patient name and adds them to the end of the queue
 * - "Consult patient": Removes the first patient from queue and displays their name
 * - "Exit": Terminates the program
 *
 * The program maintains a continuous loop, returning to the main menu after each action
 * (except exit), ensuring efficient queue management throughout the medical office's operations.
 *
 * @fileoverview Medical office patient queue management system
 * @author Felipe
 * @version 1.0.0
 */

let queue = [];
let choice;

do {
  let menuOptions = "Medical Office Queue System\n\n";
  menuOptions += "Current Queue:\n";
  if (queue.length === 0) {
    menuOptions += "The queue is currently empty.\n";
  } else {
    queue.forEach((patient, index) => {
      menuOptions += `${index + 1}º - ${patient}\n`;
    });
  }
  menuOptions += "\nMenu Options:\n";
  menuOptions += "1. New patient\n";
  menuOptions += "2. Consult patient\n";
  menuOptions += "3. Exit\n";
  menuOptions += "\nPlease enter your choice (1-3):";
  choice = prompt(menuOptions);

  switch (choice) {
    case "1":
      let newPatient = prompt("Enter the name of the new patient:");
      if (newPatient) {
        queue.push(newPatient);
        alert(`${newPatient} has been added to the queue.`);
      }
      break;
    case "2":
      if (queue.length === 0) {
        alert("The queue is empty. No patients to consult.");
      } else {
        let consultedPatient = queue.shift();
        alert(`Consulting patient: ${consultedPatient}`);
      }
      break;
    case "3":
      alert("Exiting the Medical Office Queue System. Goodbye!");
      break;
    default:
      alert("Invalid choice. Please select a valid option (1-3).");
  }
} while (choice !== "3");
