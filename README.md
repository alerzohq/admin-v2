# Admin Web - AlerzoPay

## Requirements

| Tech |  Version   |
| :--: | :--------: |
| node | `v16.15.0` |
| npm  |  `8.11.0`  |

## Setup


1.- Clone the repo and install deps: `git clone repo_url && npm install`

2.- Once you are in the app folder, create your environment file by copying the example provided: `cp .env.example .env`. 
(Ask the administrator for the values)

**Sample Environment Variables**

 `REACT_APP_API_BASE_URL=` (Specify the base URL for the API)
 
 `REACT_APP_ENCRYPTION_KEY=` (Provide the encryption key)

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

## Folder Structure

This project adopts the container-presentational design pattern. Below is an overview of the folder structure and their respective roles:

**Components:** This folder contains shared components that are reused across different parts of the application. These components utilize the compound component design pattern to manage complex structures as flexible and scalable units.
```

const Button = ({ loading, children, ...restProps }: ButtonProps) => {
  return (
    <ButtonContainer {...restProps}>
      {loading ? <Loader color={Color.alerzoWhite} /> : children}
    </ButtonContainer>
  )
}

export default Button

Button.Group = function ButtonGroup({
  children,
  ...restProps
}: ButtonGroupProps) {
  return <Group {...restProps}>{children}</Group>
}



```

**Container:** This folder is dedicated to creating business logic that supports the UI components.

```
const OverviewContainer = () => {
  const getTranStats = () => {
    return getResource(`dashboard/statistics`)
  }

  const { isLoading: loading, data: Stats } = useQuery(
    'overview-stats',
    getTranStats
  )
  const Statistics = Stats?.data

  return (
    <>
      <CardWidget
        statistics={overviewStats(Statistics)}
        labels={dashboardLabels}
        icons={dashboardStatsIcons}
        loading={loading}
      />
    </>
  )
}

export default OverviewContainer
```

**Pages:** This folder primarily imports and assembles containers to form complete pages.
```
import { OverviewContainer } from '../../../container/dashboard'

const Overview = () => {
  return (
    <Container title='Dashboard'>
      <OverviewContainer />
    </Container>
  )
}

export default Overview


```
