/**
 * Job Vacancy System
 *
 * A JavaScript program that simulates a job vacancy management system.
 * The system allows managing job positions and adding candidates to available positions.
 *
 * Features:
 * - List available positions: Displays index, name and number of candidates
 * - Create new position: Adds a position with name, description and deadline
 * - View position: Shows all detailed information of a specific position
 * - Register candidate: Adds a candidate to an existing position
 * - Delete position: Removes a position from the system after confirmation
 * - Exit: Closes the program
 *
 * Menu Options:
 * - "List positions": Shows all positions with index, name and number of candidates
 * - "Create position": Registers new position with confirmation
 * - "View position": Displays complete details of a position (index, name, description, deadline, candidates)
 * - "Register candidate": Adds candidate to a position with confirmation
 * - "Delete position": Removes position after showing information and confirming
 * - "Exit": Closes the system
 *
 * The program uses data structures such as objects and arrays to manage
 * information, maintains a continuous loop and returns to the main menu after each operation.
 *
 * @fileoverview Job vacancy management system
 * @author Felipe
 * @version 1.0.0
 */

// Constants
const MENU_OPTIONS = {
  listPositions: "1",
  createPosition: "2",
  viewPosition: "3",
  registerCandidate: "4",
  deletePosition: "5",
  Exit: "6",
};

let positions = []; // Array to store job positions

/**
 * Builds and returns the menu string
 * @returns {string} The formatted menu text
 */
function buildMenu() {
  return `Job vacancy management system

Menu Options:
 1 - List positions
 2 - Create position
 3 - View position
 4 - Register candidate
 5 - Delete position
 6 - Exit

Please enter your choice (1-6):`;
}

function CreatePosition() {
  let positionName = prompt("Enter the position name:");
  let positionDescription = prompt("Enter the position description:");
  let deadlineDate = prompt("Enter the deadline date (dd/mm/yyyy):");
  let confirmation = confirm(
    `Please confirm the position details:\nName: ${positionName}\nDescription: ${positionDescription}\nDeadline: ${deadlineDate}`
  );
  if (confirmation) {
    let newPosition = {
      name: positionName,
      description: positionDescription,
      deadline: deadlineDate,
      candidates: [],
    };
    positions.push(newPosition);
    alert("Position created successfully!");
  } else {
    alert("Position creation cancelled.");
  }
}

function ListPositions() {
  if (positions.length === 0) {
    alert("No positions available.");
  } else {
    let positionList = "Available Positions:\n\n";
    positions.forEach((position, index) => {
      positionList += `Index: ${index}\nName: ${position.name}\nNumber of Candidates: ${position.candidates.length}\n\n`;
    });
    alert(positionList);
  }
}

function ViewPosition() {
  let indexInput = prompt("Enter the index of the position to view:");
  let index = parseInt(indexInput);
  if (isNaN(index) || index < 0 || index >= positions.length) {
    alert("Invalid index. Please try again.");
    return;
  } else {
    let position = positions[index];
    let positionDetails = `Position Details:\n\nIndex: ${index}\nName: ${position.name}\nDescription: ${position.description}\nDeadline: ${position.deadline}\nCandidates:\n`;
    if (position.candidates.length === 0) {
      positionDetails += "No candidates registered.\n";
    } else {
      position.candidates.forEach((candidate, candidateIndex) => {
        positionDetails += `${candidateIndex + 1}. ${candidate}\n`;
      });
    }
    alert(positionDetails);
  }
}

function RegisterCandidate() {
  let candidateName = prompt("Enter the candidate's name:");
  let indexInput = prompt(
    "Enter the index of the position to register the candidate:"
  );
  let index = parseInt(indexInput);
  if (isNaN(index) || index < 0 || index >= positions.length) {
    alert("Invalid index. Please try again.");
    return;
  } else {
    let position = positions[index];
    let confirmation = confirm(
      `Please confirm the registration of candidate "${candidateName}" to position "${position.name}".`
    );
    if (confirmation) {
      position.candidates.push(candidateName);
      alert("Candidate registered successfully!");
    } else {
      alert("Candidate registration cancelled.");
    }
  }
}

function DeletePosition() {
  let indexInput = prompt("Enter the index of the position to delete:");
  let index = parseInt(indexInput);
  if (isNaN(index) || index < 0 || index >= positions.length) {
    alert("Invalid index. Please try again.");
    return;
  } else {
    let position = positions[index];
    let positionDetails = `Position Details:\n\nIndex: ${index}\nName: ${position.name}\nDescription: ${position.description}\nDeadline: ${position.deadline}\nCandidates:\n`;
    if (position.candidates.length === 0) {
      positionDetails += "No candidates registered.\n";
    } else {
      position.candidates.forEach((candidate, candidateIndex) => {
        positionDetails += `${candidateIndex + 1}. ${candidate}\n`;
      });
    }
    let confirmation = confirm(
      `Please confirm the deletion of the following position:\n\n${positionDetails}`
    );
    if (confirmation) {
      positions.splice(index, 1);
      alert("Position deleted successfully!");
    } else {
      alert("Position deletion cancelled.");
    }
  }
}

/**
 * Main function that runs the calculator
 */
function runSystem() {
  let userChoice;

  do {
    // Display menu and get user choice
    userChoice = prompt(buildMenu());

    // Handle user selection
    switch (userChoice) {
      case MENU_OPTIONS.listPositions:
        ListPositions();
        break;

      case MENU_OPTIONS.createPosition:
        CreatePosition();
        break;

      case MENU_OPTIONS.viewPosition:
        ViewPosition();
        break;

      case MENU_OPTIONS.registerCandidate:
        RegisterCandidate();
        break;

      case MENU_OPTIONS.deletePosition:
        DeletePosition();
        break;

      case MENU_OPTIONS.Exit:
        alert("Exiting the Vacancy System. Goodbye!");
        break;

      default:
        alert("Invalid choice. Please select a valid option (1-6).");
    }
  } while (userChoice !== MENU_OPTIONS.Exit);
}

// Initialize the calculator when the script loads
runSystem();
