// Set a variable that contains all the fields needed for articles when a fetch for
// content is performed

const HOME_PAGE_FIELDS = `
  referenceName
  slug
  heroBackground {
    url
  }
  backgroundImage {
    url
  }
  navigation {
    ... on Navigation {
      logo {
        url
      }
      buttonsCollection {
        items {
          label
          externalUrl
          style
          openIn
        }
      }
    }
  }
  experienceCardsCollection(limit: 20) {
    items {
      ... on ExperienceCard {
        bgImage {
          url
        }
        description
        title
      }
    }
  }
  locationCardCollection(limit: 10) {
    items {
      ... on LocationCard {
        venueName
        location
        icon {
          title
          url
          fileName
        }
      }
    }
  }
  footerSection {
    ... on FooterSection {
      firmInfo
      terms
      policy
      logo {
        url
      }
      
    }
  }

}
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Switch the Bearer token depending on whether the fetch is supposed to retrieve live
        // Contentful content or draft content
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
      // Associate all fetches for articles with an "articles" cache tag so content can
      // be revalidated or updated from Contentful on publish
      next: { tags: ["website"] },
      // next: { tags: ["articles"] },
    }
  ).then((response) => response.json());
}

function extractEntries(fetchResponse) {
  return fetchResponse?.data?.knowledgeArticleCollection?.items;
}

export async function getHomePageContent(isDraftMode = false) {
  const response = await fetchGraphQL(
    `query {
      homePageCollection(preview: ${isDraftMode ? "true" : "false"
    }) {
        items{
          ${HOME_PAGE_FIELDS}
      }
    }`
  );
  const homePageData = response?.data?.homePageCollection?.items[0];

  return homePageData;
}


