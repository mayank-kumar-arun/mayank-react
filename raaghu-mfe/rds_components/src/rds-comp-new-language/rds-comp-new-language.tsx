import React from 'react'
import { RdsSelectList } from "../rds-elements";

export interface RdsCompNewLanguageProps{

}
const RdsCompNewLanguage = (props: RdsCompNewLanguageProps) => {
  const flags = [
    {icon: "ad", option: "ad"}
    ,{icon: "ad", option: "ae"}
    ,{icon: "ad", option: "af"}
    ,{icon: "ad", option: "ag"}
    ,{icon: "ad",option: "ai"}
];
const languageNames = [
  { option: "Invariant Language ()"}
  ,{option: "Afar (aa)"}
  ,{ option: "Afar (Djibouti) (aa-DJ)"}
  ,{ option: "Afar (Eritrea) (aa-ER)"}
  ,{ option: "Afar (Ethiopia) (aa-ET)"}
  ,{ option: "Afrikaans (af)"}
  ,{ option: "Afrikaans (Namibia) (af-NA)"}
  ,{option: "Afrikaans (South Africa) (af-ZA)"}
  ,{ option: "Aghem (agq)"}
  ,{ option: "Aghem (Cameroon) (agq-CM)"}
  ,{ option: "Akan (ak)"}
]
  return (
    <form>
    <RdsSelectList label = "Afar (aa)" selectItems = {languageNames} ></RdsSelectList>
    <RdsSelectList label = "de" selectItems = {flags} ></RdsSelectList>  
    </form>
  )
}

export default RdsCompNewLanguage