/**
 * Card Deck Simulation System
 *
 * A JavaScript program that simulates a deck of cards management system.
 * The system provides an interactive menu interface to manage a card deck with the following functionality:
 *
 * Features:
 * - Display current number of cards in the deck
 * - Add new cards to the top of the deck
 * - Draw cards from the top of the deck
 * - Interactive menu system that continues until explicitly terminated
 *
 * Menu Options:
 * - "Add a card": Prompts for card name and adds it to the top of the deck
 * - "Draw a card": Removes the top card from deck and displays its name
 * - "Exit": Terminates the program
 *
 * The program maintains a continuous loop, returning to the main menu after each action
 * (except exit), ensuring efficient deck management operations.
 *
 * @fileoverview Card deck simulation system
 * @author Felipe
 * @version 1.0.0
 */

let Deck = [];
let choice;

do {
  let menuOptions = "Deck Simulator\n\n";
  menuOptions += "Current Deck lenght:\n";
  if (Deck.length === 0) {
    menuOptions += "The Deck is currently empty.\n";
  } else {
    menuOptions += `${Deck.length} Cards\n`;
  }
  menuOptions += "\nMenu Options:\n";
  menuOptions += "1. Add a Card\n";
  menuOptions += "2. Draw a card\n";
  menuOptions += "3. Exit\n";
  menuOptions += "\nPlease enter your choice (1-3):";
  choice = prompt(menuOptions);

  switch (choice) {
    case "1":
      let addCard = prompt("Enter the name of the new Card:");
      if (addCard) {
        Deck.unshift(addCard);
        alert(`${addCard} has been added to the Deck`);
      }
      break;
    case "2":
      if (Deck.length === 0) {
        alert("The deck is empty. No cards to draw.");
      } else {
        let CardDraw = Deck.shift();
        alert(`The Card ${CardDraw} has been Draw`);
      }
      break;
    case "3":
      alert("Exiting the Deck Menagement System. Goodbye!");
      break;
    default:
      alert("Invalid choice. Please select a valid option (1-3).");
  }
} while (choice !== "3");
