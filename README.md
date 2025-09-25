# CowApp

A simple Angular + PrimeNG application to manage cows.  
Users can view the cow list with details, add new cows, and apply search and filters on existing records.

---

## Features

- Display a list of cows with details: **ear tag, sex, pen, status, weight, and last recorded event**.
- Add a new cow with validation for **unique ear tag** and optional weight.
- Search cows by ear tag.
- Filter cows by status or pen.
- Responsive UI using **PrimeNG** and **PrimeFlex**.
- Clicking a cow opens a **details page** with complete information.

---
## Node Version
v22.19.0

## Run the App
If cloned from gitub, run npm install in cowapp

To run the development server:

```bash
npx nx serve cow-app
Navigate to http://localhost:4200 to see the app in action.

## To build a production bundle:

```bash
npx nx build cow-app


## Search & Filter
Search: Type in the search box to filter by ear tag.

Filter by status: Use the dropdown to filter cows by Active, In Treatment, Deceased or All.

Filter by pen: Type the pen name to filter cows in a specific area.

## Add New Cow
Click "Add New Cow" button on the bottom right of the cow list.

Fill in the required fields: Ear Tag (unique), Sex, Pen, Status (default Active).

Optional: Weight (must be positive if provided).

Click Submit to add the cow to the list.

## Folder Structure
libs/ → Shared libraries (if any)

src/app → Components, services, models

## Technologies Used
Angular 20 (Standalone Components)

PrimeNG (UI Components)

PrimeFlex (Responsive Layout)

Nx Monorepo

## Nx Workspace Notes
This project was generated with Nx. You can use Nx commands to manage the workspace:

See all available targets for the project:

```bash
npx nx show project cow-app
Generate new application:

```bash
npx nx g @nx/angular:app <app-name>
Generate new library:

```bash
npx nx g @nx/angular:lib <lib-name>
Visualize the dependency graph:

```bash
npx nx graph
For more details on Nx features, plugins, and CI setup, visit Nx Docs.

## License
MIT