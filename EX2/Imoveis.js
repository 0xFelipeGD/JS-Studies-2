/**
 * Real Estate Registration System
 *
 * A JavaScript program that functions as a real estate property registration system.
 * The system provides an interactive menu interface to manage property records with the following functionality:
 *
 * Features:
 * - Display total number of registered properties at the top of the menu
 * - Save new properties with detailed information
 * - View all saved properties with their complete details
 * - Interactive menu system that continues until explicitly terminated
 *
 * Property Information Required:
 * - Owner's name
 * - Number of bedrooms
 * - Number of bathrooms
 * - Garage availability (yes/no)
 *
 * Menu Options:
 * - "Save property": Prompts for property details and adds them to the registry
 * - "Show all properties": Displays all registered properties with their information
 * - "Exit": Terminates the program
 *
 * The program maintains a continuous loop, returning to the main menu after each action
 * (except exit), ensuring efficient property management throughout the registration process.
 *
 * @fileoverview Real estate property registration management system
 * @author Felipe
 * @version 1.0.0
 */

let properties = [];
let choice;

do {
  let menuOptions = "Real estate property registration management system\n\n";
  menuOptions += "Current number of registered properties:\n";
  if (properties.length === 0) {
    menuOptions += "The number of registered properties is zero.\n";
  } else {
    menuOptions += `${properties.length} registered properties\n`;
  }
  menuOptions += "\nMenu Options:\n";
  menuOptions += "1. Save property\n";
  menuOptions += "2. Show all properties\n";
  menuOptions += "3. Exit\n";
  menuOptions += "\nPlease enter your choice (1-3):";
  choice = prompt(menuOptions);

  switch (choice) {
    case "1":
      let propertieName = prompt("Enter the name of the propertie:");
      let numberOfBedrooms = prompt("Enter the number of Bedrooms:");
      let numberOfBathrooms = prompt("Enter the number of Bathrooms:");
      let garageAvailability = confirm(
        "Does the propertie has garage Availability?"
      );
      let newPropertie = {
        Name: propertieName,
        Bedrooms: numberOfBedrooms,
        Bathrooms: numberOfBathrooms,
        Garage: garageAvailability ? "Yes" : "No",
      };
      properties.push(newPropertie);
      alert("Propertie saved successfully.");
      break;
    case "2":
      if (properties.length === 0) {
        alert("No properties registered.");
      } else {
        let allProperties = "Registered Properties:\n\n";
        properties.forEach((propertie, index) => {
          allProperties += `Property ${index + 1}:\n`;
          allProperties += `Propertie's Name: ${propertie.Name}\n`;
          allProperties += `Number of Bedrooms: ${propertie.Bedrooms}\n`;
          allProperties += `Number of Bathrooms: ${propertie.Bathrooms}\n`;
          allProperties += `Garage Availability: ${propertie.Garage}\n\n`;
        });
        alert(allProperties);
      }
      break;
    case "3":
      alert(
        "Exiting the Real estate property registration management system. Goodbye!"
      );
      break;
    default:
      alert("Invalid choice. Please select a valid option (1-3).");
  }
} while (choice !== "3");
