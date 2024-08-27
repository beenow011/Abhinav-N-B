'use client';
import React, { useEffect, useState } from "react";

// Define the types for the data we are going to fetch
type ContributionDay = {
    date: string;
    contributionCount: number;
    color: string;
};

type ContributionWeek = {
    contributionDays: ContributionDay[];
};

type ContributionData = {
    data: {
        user: {
            contributionsCollection: {
                contributionCalendar: {
                    weeks: ContributionWeek[];
                };
            };
        };
    }
};

// Your GitHub token (make sure to keep it secure)

// GraphQL query to fetch the contribution data
const query = `
{
  user(login: "beenow011") {
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            date
            contributionCount
            color
          }
        }
      }
    }
  }
}`;


const fetchContributions = async (): Promise<ContributionWeek[]> => {
    const response = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });
    const data: ContributionData = await response.json();
    // console.log(data)
    // console.log(data.data.user.contributionsCollection.contributionCalendar.weeks);
    return data.data.user.contributionsCollection.contributionCalendar.weeks;


};

const ContributionGraph: React.FC = () => {
    const [contributions, setContributions] = useState<ContributionWeek[]>([]);
    console.log(contributions);
    useEffect(() => {
        fetchContributions().then((data) => setContributions(data));
    }, []);

    return (
        <div className="flex squares flex-wrap gap-1">
            {contributions.map((week, weekIndex) =>
                week.contributionDays.map((day, dayIndex) => (
                    <div
                        key={`${weekIndex}-${dayIndex}`}
                        style={{
                            backgroundColor: day.color,
                            width: "13px",
                            height: "13px",
                        }}
                        title={`${day.contributionCount} contributions on ${day.date}`}
                    />
                ))
            )}
        </div>
    );
};

export default ContributionGraph;
