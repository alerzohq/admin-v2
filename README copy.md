# Admin Web - AlerzoPay

## Requirements

| Tech |  Version   |
| :--: | :--------: |
| node | `v16.15.0` |
| npm  |  `8.11.0`  |

## Setup


1.- Clone the repo and install deps: `git clone repo_url && npm install`

2.- Once you're on the app folder, create your env file: `cp .env.example .env`. (Ask the administrator for the values)

3.- Install deps: `npm install`

4.- Run the app: `npm start`

## GitFlow

Our base branch is `develop`, **all branches should branch of from this branch for any development** We also have `staging` branch, both branches are beign deployed to its own environment:

| Branch |        Environment         |
| :----: | :------------------------: |
| `develop`  | https://admin.develop.alerzopay.com/ |
| `staging` | https://admin.staging.alerzopay.com/  |
| `production`|https://admin.alerzopay.com/  |

The git flow is really simple, just create your `feature/*`, `hotfix/*` or `bug/*` branch from the correct branch, and once you're done with your changes open a MR



With this hook, you can fetch the data on first render, additionally you can also use `refetch` function to make a fetch again.

In case you won't need to fetch on first render and instead make a lazy call using the lazy hook:



