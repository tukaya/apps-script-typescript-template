/**
 * Menu Items - Google Apps Script addon menu configuration
 * Handles the creation and management of the addon menu in Google Sheets
 */

/**
 * Called when the addon is installed
 * Sets up the initial menu structure
 */
export function onInstall(): void {
  onOpen();
}

/**
 * Called when the spreadsheet is opened
 * Creates the addon menu with available actions
 */
export function onOpen(): void {
  const ui: GoogleAppsScript.Base.Ui = SpreadsheetApp.getUi();
  const menu: GoogleAppsScript.Base.Menu = ui.createAddonMenu();
  
  menu
    .addItem('Show Sidebar', 'showSidebar')
    .addToUi();
}

/**
 * Shows the TagNBudget sidebar
 * Creates an HTML output widget and displays it in the sidebar
 */
export function showSidebar(): void {
  const widget: GoogleAppsScript.HTML.HtmlOutput = HtmlService.createHtmlOutputFromFile("sidebar.html");
  widget.setTitle("TagNBudget");
  SpreadsheetApp.getUi().showSidebar(widget);
}
