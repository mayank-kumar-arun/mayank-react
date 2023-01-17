import React from "react";
import { RdsSelectList, RdsCheckbox , RdsLabel} from "../rds-elements";

export interface RdsCompNewLanguageProps {}
const RdsCompNewLanguage = (props: RdsCompNewLanguageProps) => {
  const flags = [
    { option: "ad" },
    { option: "ae" },
    { option: "af" },
    { option: "ag" },
    { option: "ai" },
  ];
  const languageNames = [
    { option: "Invariant Language ()" },
    { option: "Afar (aa)" },
    { option: "Afar (Djibouti) (aa-DJ)" },
    { option: "Afar (Eritrea) (aa-ER)" },
    { option: "Afar (Ethiopia) (aa-ET)" },
    { option: "Afrikaans (af)" },
    { option: "Afrikaans (Namibia) (af-NA)" },
    { option: "Afrikaans (South Africa) (af-ZA)" },
    { option: "Aghem (agq)" },
    { option: "Aghem (Cameroon) (agq-CM)" },
    { option: "Akan (ak)" },
  ];
  return (
    <form>
      <div className="row">
        <div className="col-md-6 mb-3">
      
          <RdsSelectList
            label="Afar (aa)"
            selectItems={languageNames}
          ></RdsSelectList>
        </div>
        <div className="col-md-6 mb-3">
          <RdsSelectList label="de" selectItems={flags}></RdsSelectList>
        </div>
      </div>

      <RdsCheckbox label="is Enabled" checked={false}></RdsCheckbox>
    </form>
  );
};

export default RdsCompNewLanguage;
