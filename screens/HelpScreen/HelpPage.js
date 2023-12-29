import React from "react";
import SearchBar from '../../components/SearchBar'
import HelpPageContainer from "./subscreens/HelpPageContainer";
import HelpPageOpt from "./subscreens/HelpPageOpt";
import Title from "./subscreens/Title";
import { listOfProvidedHelpOpts } from "./listOfProvidedHelpOpts";
const HelpPage = () => {
  return (
    <HelpPageContainer>
      <Title title='Hi, how can we help you?'/>
      <SearchBar/>
      {listOfProvidedHelpOpts.map((option, i) =>
                                      <HelpPageOpt detail={option.detail} question={option.question} key={i.toString()}/>)}
    </HelpPageContainer>
  );
};
export default HelpPage;
