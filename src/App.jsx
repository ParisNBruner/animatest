import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|dashboard)">
          <Dashboard {...dashboardData} />
        </Route>
      </Switch>
    </Router>
  );
}

const iconcommunicationmessageData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/vector@2x.svg",
};

const iconcommunicationmessage2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/vector@2x.svg",
};

const navigationelementsverticallineItemsData = {
    myOrganizations: "My Organizations",
    iconcommunicationmessageProps: iconcommunicationmessage2Data,
};

const iconcommunicationmessage3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/vector@2x.svg",
};

const navigationelementsverticallineItems2Data = {
    myOrganizations: "Create Listing",
    iconcommunicationmessageProps: iconcommunicationmessage3Data,
};

const property2imageLeftData = {
    media: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/media@2x.svg",
    text3: "Headline",
    text4: "Greyhound divisively hello coldly wonderfully...",
};

const styleaccentStatedefaultLeadingIconlData = {
    children: "POSTED",
};

const property2imageLeft2Data = {
    media: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/media@2x.svg",
    text3: "Headline",
    text4: "Greyhound divisively hello coldly wonderfully...",
};

const styleaccentStatedefaultLeadingIconl2Data = {
    children: "POSTED",
};

const property2imageLeft3Data = {
    media: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/media@2x.svg",
    text3: "Headline",
    text4: "Greyhound divisively hello coldly wonderfully...",
};

const styleaccentStatedefaultLeadingIconl3Data = {
    children: "POSTED",
};

const property2imageLeft4Data = {
    media: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/media@2x.svg",
    text3: "Headline",
    text4: "Greyhound divisively hello coldly wonderfully...",
};

const styleaccentStatedefaultLeadingIconl4Data = {
    children: "POSTED",
};

const property2imageLeft5Data = {
    media: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/media@2x.svg",
    text3: "Headline",
    text4: "Greyhound divisively hello coldly wonderfully...",
};

const styleaccentStatedefaultLeadingIconl5Data = {
    children: "POSTED",
};

const dashboardData = {
    myShare: "My Share",
    divider: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609e16934a5b8cd6aa2fa53f/img/divider@2x.png",
    navigationElementsVerticalHeaderAre: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/header-bg@2x.svg",
    avatarMan15: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/avatar-man-15@2x.svg",
    share: "Share",
    settings: "Settings",
    mainSettings: "Main Settings",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/vector-3@2x.svg",
    place: "Home",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/609b7591caba8f79a0772711/releases/609dd4f95dfda273535b8593/img/vector-5@2x.svg",
    notifications: "Notifications",
    completedTasks: "Completed tasks",
    myOffers: "My Offers",
    myRequest: "My Request",
    completed: "Completed",
    iconcommunicationmessageProps: iconcommunicationmessageData,
    navigationelementsverticallineItems: navigationelementsverticallineItemsData,
    navigationelementsverticallineItems2: navigationelementsverticallineItems2Data,
    property2imageLeftProps: property2imageLeftData,
    styleaccentStatedefaultLeadingIconl: styleaccentStatedefaultLeadingIconlData,
    property2imageLeftProps2: property2imageLeft2Data,
    styleaccentStatedefaultLeadingIconl2: styleaccentStatedefaultLeadingIconl2Data,
    property2imageLeftProps3: property2imageLeft3Data,
    styleaccentStatedefaultLeadingIconl3: styleaccentStatedefaultLeadingIconl3Data,
    property2imageLeftProps4: property2imageLeft4Data,
    styleaccentStatedefaultLeadingIconl4: styleaccentStatedefaultLeadingIconl4Data,
    property2imageLeftProps5: property2imageLeft5Data,
    styleaccentStatedefaultLeadingIconl5: styleaccentStatedefaultLeadingIconl5Data,
};

