import { inter } from "./font/font";
import { SpeedInsights } from "@vercel/speed-insights/next";
async function prefetchData() {
  const baseUrl = "https://altserver.westeurope.cloudapp.azure.com/api/v1/";
  const endpoints = [
    "user-stats/new-users",
    "user-stats/total-amount",
    "user-stats/active-users",
    "user-stats/users",
    "user-stats/user-appointment",
    "user-stats/location-stats",
    "lawyer-stats/unverified-lawyer",

    // Add more endpoint URLs as needed
  ];
  const authToken = process.env.AUTH_TOKEN;

  const analyticsData = {};

  try {
    const fetchRequests = endpoints.map(async (endpoint) => {
      const fullEndpoint = baseUrl + endpoint;
      const response = await fetch(fullEndpoint, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`, // Include authorization token if needed
          "Content-Type": "application/json", // Adjust content type if necessary
        },
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok for ${endpoint}`);
      }

      const responseData = await response.json();
      // Assign fetched data to the analyticsData object
      analyticsData[endpoint] = responseData;
    });

    // Wait for all fetch requests to complete
    await Promise.all(fetchRequests);

    // Return the analyticsData object

    return analyticsData;
  } catch (error) {
    // Handle errors here
    console.error("There was a problem with prefetching:", error);
    // Return an empty object or handle error as appropriate for your use case
    return {};
  }
}

// Call the function to prefetch the data
export const analyticsData = await prefetchData();

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body class="overflow-hidden">
        {children} <SpeedInsights />
      </body>
    </html>
  );
}
