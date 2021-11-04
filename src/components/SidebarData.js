import React from 'react'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/Io";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
    {
        title: "NBA",
        path: "",
        icon: <MdIcons.MdOutlineSportsBasketball />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: "Atlanta Hawks",
                path: "/teams/Atlanta Hawks",
                image: "https://ae01.alicdn.com/kf/HTB1H06DIFXXXXccXpXXq6xXFXXX7/Atlanta-Hawks-New-Logo-Flag-3ft-x-5ft-Polyester-NBA-Atlanta-Hawks-Banner-Flying-Size-No.jpg",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Boston Celtics",
                path: "/teams/Boston Celtics",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Brooklyn Nets",
                path: "/teams/Brooklyn Nets",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Charlotte Hornets",
                path: "/teams/Charlotte Hornets",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Chicago Bulls",
                path: "/teams/Chicago Bulls",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Cleveland Cavaliers",
                path: "/teams/Cleveland Cavaliers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Dallas Mavericks",
                path: "/teams/Dallas Mavericks",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Denver Nuggets",
                path: "/teams/Denver Nuggets",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Detroit Pistons",
                path: "/teams/Detroit Pistons",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Golden State Warriors",
                path: "/teams/Golden State Warriors",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Huston Rockets",
                path: "/teams/Huston Rockets",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Indiana Pacers",
                path: "/teams/Indiana Pacers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Los Angeles Clippers",
                path: "/teams/Los Angeles Clippers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Los Angeles Lakers",
                path: "/teams/Los Angeles Lakers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Memphis Grizzlies",
                path: "/teams/Memphis Grizzlies",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Miami Heat",
                path: "/teams/Miami Heat",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Milwaukee Bucks",
                path: "/teams/Milwaukee Bucks",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Minnesota Timberwolves",
                path: "/teams/Minnesota Timberwolves",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "New Orleans Pelicans",
                path: "/teams/New Orleans Pelicans",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "New York Knicks",
                path: "/teams/New York Knicks",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Oklahoma City Thunder",
                path: "/teams/Oklahoma City Thunder",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Orlando Magic",
                path: "/teams/Orlando Magic",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Philadelphia 76ers",
                path: "/teams/Philadelphia 76ers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Phoenix Suns",
                path: "/teams/Phoenix Suns",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Portland Trail Blazers",
                path: "/teams/Portland Trail Blazers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Sacramento Kings",
                path: "/teams/Sacramento Kings",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "San Antonio Spurs",
                path: "/teams/San Antonio Spurs",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Toronto Raptors",
                path: "/teams/Toronto Raptors",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Utah Jazz",
                path: "/teams/Utah Jazz",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Washington Wizards",
                path: "/teams/Washington Wizards",
                // icon: <IoIcons.IoIosPaper />, 
            }

        ]
    },
    {
        title: "MLB",
        path: "/teams",
        icon: <MdIcons.MdOutlineSportsBaseball />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: "Arizona Diamondbacks",
                path: "/teams/Arizona Diamondbacks",
                image: "",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Atlanta Braves",
                path: "/teams/Atlanta Braves",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Baltimore Orioles",
                path: "/teams/Baltimore Orioles",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Boston Red Sox",
                path: "/teams/Boston Red Sox",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Chicago White Sox",
                path: "/teams/Chicago White Sox",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Chicago Cubs",
                path: "/teams/Chicago Cubs",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Cincinnati Reds",
                path: "/teams/Cincinnati Reds",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Cleveland Indians",
                path: "/teams/Cleveland Indians",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Colorado Rockies",
                path: "/teams/Colorado Rockies",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Detroit Tigers",
                path: "/teams/Detroit Tigers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Houston Astros",
                path: "/teams/Houston Astros",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Kansas City Royals",
                path: "/teams/Kansas City Royals",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Los Angeles Angels",
                path: "/teams/Los Angeles Angels",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Los Angeles Dodgers",
                path: "/teams/Los Angeles Dodgers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Memphis Grizzlies",
                path: "/teams/Memphis Grizzlies",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Miami Marlins",
                path: "/teams/Miami Marlins",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Milwaukee Bucks",
                path: "/teams/Milwaukee Bucks",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Milwaukee Brewers",
                path: "/teams/Milwaukee Brewers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Minnesota Twins",
                path: "/teams/Minnesota Twins",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "New York Yankees",
                path: "/teams/New York Yankees",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "New York Mets",
                path: "/teams/New York Mets",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Oakland Athletics",
                path: "/teams/Oakland Athletics",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Philadelphia Phillies",
                path: "/teams/Philadelphia Phillies",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Pittsburgh Pirates",
                path: "/teams/Pittsburgh Pirates",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "San Diego Padres",
                path: "/teams/San Diego Padres",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "San Francisco Giants",
                path: "/teams/San Francisco Giants",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Seattle Mariners",
                path: "/teams/Seattle Mariners",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "St. Louis Cardinals",
                path: "/teams/St. Louis Cardinals",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Tampa Bay Rays",
                path: "/teams/Tampa Bay Rays",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Texas Rangers",
                path: "/teams/Texas Rangers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Toronto Blue Jays",
                path: "/teams/Toronto Blue Jays",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Washington Nationals",
                path: "/teams/Washington Nationals",
                // icon: <IoIcons.IoIosPaper />, 
            },
        ]
    },
    {
        title: "EPL",
        path: "/teams",
        icon: <MdIcons.MdSportsSoccer />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: "Arsenal",
                path: "/teams/Arsenal",
                image: "",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Aston Villa",
                path: "/teams/Aston Villa",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Brighton & Hove Albion",
                path: "/teams/Brighton & Hove Albion",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Burnley",
                path: "/teams/Burnley",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Brentford",
                path: "/teams/Brentford",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Chelsea",
                path: "/teams/Chelsea",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Crystal Palace",
                path: "/teams/Crystal Palace",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Everton",
                path: "/teams/Everton",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Leeds United",
                path: "/teams/Leeds United",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Leicester City",
                path: "/teams/Leicester City",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Liverpool",
                path: "/teams/Liverpool",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Manchester City",
                path: "/teams/Manchester City",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Manchester United",
                path: "/teams/Manchester United",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Newcastle United",
                path: "/teams/Newcastle United",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Norwich City",
                path: "/teams/Norwich City",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Southampton",
                path: "/teams/Southampton",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Tottenham Hotspur",
                path: "/teams/Tottenham Hotspur",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Watford",
                path: "/teams/Watford",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "West Ham United",
                path: "/teams/West Ham United",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Wolverhampton Wanderers",
                path: "/teams/Wolverhampton Wanderers",
                // icon: <IoIcons.IoIosPaper />, 
            }

        ]
    },
    {
        title: "NFL",
        path: "/teams",
        icon: <MdIcons.MdOutlineSportsFootball />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: "Arizona Cardinals",
                path: "/teams/Arizona Cardinals",
                image: "",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Atlanta Falcons",
                path: "/teams/Atlanta Falcons",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Baltimore Ravens",
                path: "/teams/Baltimore Ravens",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Buffalo Bills",
                path: "/teams/Buffalo Bills",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Carolina Panthers",
                path: "/teams/Carolina Panthers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Chicago Bears",
                path: "/teams/Chicago Bears",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Cincinnati Bengals",
                path: "/teams/Cincinnati Bengals",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Cleveland Browns",
                path: "/teams/Cleveland Browns",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Golden State Warriors",
                path: "/teams/Golden State Warriors",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Huston Rockets",
                path: "/teams/Huston Rockets",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Dallas Cowboys",
                path: "/teams/Dallas Cowboys",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Denver Broncos",
                path: "/teams/Denver Broncos",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Detroit Lions",
                path: "/teams/Detroit Lions",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Green Bay Packers",
                path: "/teams/Green Bay Packers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Houston Texans",
                path: "/teams/Houston Texans",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Real Madrid",
                path: "/teams/Real Madrid",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Real Sociedad",
                path: "/teams/Real Sociedad",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Sevilla",
                path: "/teams/Sevilla",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Valencia",
                path: "/teams/Valencia",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Villarreal",
                path: "/teams/Oklahoma City Thunder",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Los Angeles Rams",
                path: "/teams/Los Angeles Rams",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Miami Dolphins",
                path: "/teams/Miami Dolphins",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Minnesota Vikings",
                path: "/teams/Minnesota Vikings",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "New England Patriots",
                path: "/teams/New England Patriots",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "New Orleans Saints",
                path: "/teams/New Orleans Saints",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "New York Giants",
                path: "/teams/New York Giants",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "New York Jets",
                path: "/teams/New York Jets",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Philadelphia Eagles",
                path: "/teams/Philadelphia Eagles",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Pittsburgh Steelers",
                path: "/teams/Pittsburgh Steelers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "San Francisco 49ers",
                path: "/teams/San Francisco 49ers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Seattle Seahawks",
                path: "/teams/Seattle Seahawks",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Tampa Bay Buccaneers",
                path: "/teams/Tampa Bay Buccaneers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Tennessee Titans",
                path: "/teams/Tennessee Titans",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Washington Football Team",
                path: "/teams/Washington Football Team",
                // icon: <IoIcons.IoIosPaper />, 
            },

        ]
    },
    {
        title: "LIGUE 1",
        path: "/teams",
        icon: <MdIcons.MdSportsSoccer />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: "AS Monaco",
                path: "/teams/AS Monaco",
                image: "",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Angers",
                path: "/teams/Angers",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Bordeaux",
                path: "/teams/Bordeaux",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Caen",
                path: "/teams/Caen",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Dijon FCO",
                path: "/teams/Dijon FCO",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Guingamp",
                path: "/teams/Guingamp",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Lille",
                path: "/teams/Lille",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Lyon",
                path: "/teams/Lyon",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Marseille",
                path: "/teams/Marseille",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Metz",
                path: "/teams/Metz",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Montpellier",
                path: "/teams/Montpellier",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Nantes",
                path: "/teams/Nantes",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Nice",
                path: "/teams/Nice",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Paris Saint-Germain",
                path: "/teams/Paris Saint-Germain",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "SC Amiens",
                path: "/teams/SC Amiens",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Saint-Etienne",
                path: "/teams/Saint-Etienne",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Stade Rennes",
                path: "/teams/Stade Rennes",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Strasbourg",
                path: "/teams/Strasbourg",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Toulouse",
                path: "/teams/Toulouse",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Troyes",
                path: "/teams/Troyes",
                // icon: <IoIcons.IoIosPaper />, 
            },
        ]
    },
    {
        title: "LALIGA",
        path: "/teams",
        icon: <MdIcons.MdSportsSoccer />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: "Alavés",
                path: "/teams/Alavés",
                image: "",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Athletic Bilbao",
                path: "/teams/Athletic Bilbao",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Atlético Madrid",
                path: "/teams/Atlético Madrid",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Barcelona",
                path: "/teams/Barcelona",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Celta Vigo",
                path: "/teams/Celta Vigo",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Deportivo La Coruña",
                path: "/teams/Deportivo La Coruña",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Eibar",
                path: "/teams/Eibar",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Espanyol",
                path: "/teams/Espanyol",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Getafe",
                path: "/teams/Getafe",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Girona",
                path: "/teams/Girona",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Las Palmas",
                path: "/teams/Las Palmas",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Leganés",
                path: "/teams/Leganés",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Levante",
                path: "/teams/Levante",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Málaga",
                path: "/teams/Málaga",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Real Betis",
                path: "/teams/Real Betis",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Real Madrid",
                path: "/teams/Real Madrid",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Real Sociedad",
                path: "/teams/Real Sociedad",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Sevilla",
                path: "/teams/Sevilla",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Valencia",
                path: "/teams/Valencia",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Villarreal",
                path: "/teams/Villarreal",
                // icon: <IoIcons.IoIosPaper />, 
            },
            
        ]
    },
    {
        title: "BUNDESLIGA",
        path: "/teams",
        icon: <MdIcons.MdSportsSoccer />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: "FC Köln",
                path: "/teams/FC Köln",
                image: "",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "1899 Hoffenheim",
                path: "/teams/1899 Hoffenheim",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Bayer Leverkusen",
                path: "/teams/Bayer Leverkusen",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Bayern Munich",
                path: "/teams/Bayern Munich",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Borussia Dortmund",
                path: "/teams/Borussia Dortmund",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Borussia Mönchengladbach",
                path: "/teams/Borussia Mönchengladbach",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Eintracht Frankfurt",
                path: "/teams/Eintracht Frankfurt",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "FC Augsburg",
                path: "/teams/FC Augsburg",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Hamburger SV",
                path: "/teams/Hamburger SV",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Hannover 96",
                path: "/teams/Hannover 96",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Hertha BSC",
                path: "/teams/Hertha BSC",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Mainz 05",
                path: "/teams/Mainz 05",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "RB Leipzig",
                path: "/teams/RB Leipzig",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "SC Freiburg",
                path: "/teams/SC Freiburg",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Schalke 04",
                path: "/teams/Schalke 04",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "VfB Stuttgart",
                path: "/teams/VfB Stuttgart",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "VfL Wolfsburg",
                path: "/teams/VfL Wolfsburg",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Werder Bremen",
                path: "/teams/Werder Bremen",
                // icon: <IoIcons.IoIosPaper />, 
            },
            
        ]
    },
    {
        title: "SERIE A",
        path: "/teams",
        icon: <MdIcons.MdSportsSoccer />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpen: <RiIcons.RiArrowUpFill />,
        subNav: [
            {
                title: "AC Milan",
                path: "/teams/AC Milan",
                image: "",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "ACF Fiorentina",
                path: "/teams/ACF Fiorentina",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "AS Roma",
                path: "/teams/AS Roma",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Atalanta",
                path: "/teams/Atalanta",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Atalanta",
                path: "/teams/Atalanta",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Brescia Calcio",
                path: "/teams/Brescia Calcio",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Cagliari Calcio",
                path: "/teams/Cagliari Calcio",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Genoa CFC",
                path: "/teams/Genoa CFC",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Hellas Verona",
                path: "/teams/Hellas Verona",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Hannover 96",
                path: "/teams/Hannover 96",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Inter",
                path: "/teams/Inter",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Juventus",
                path: "/teams/Juventus",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Lazio Roma",
                path: "/teams/Lazio Roma",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Parma Calcio 1913",
                path: "/teams/Parma Calcio 1913",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Sampdoria",
                path: "/teams/Sampdoria",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Sassuolo Calcio",
                path: "/teams/Sassuolo Calcio",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "SPAL 2013 Ferrara",
                path: "/teams/SPAL 2013 Ferrara",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "SSC Napoli",
                path: "/teams/SSC Napoli",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "Torino FC",
                path: "/teams/Torino FC",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "SSC Udinese Calcio",
                path: "/teams/SSC Udinese Calcio",
                // icon: <IoIcons.IoIosPaper />, 
            },
            {
                title: "US Lecce",
                path: "/teams/US Lecce",
                // icon: <IoIcons.IoIosPaper />, 
            },
            
        ]
    },
    
];