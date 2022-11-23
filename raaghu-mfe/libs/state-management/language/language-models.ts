export interface LanguageItem {
    displayName: string;
    name: string;
    id: number;
  }
  
  export interface Language {
    items: LanguageItem[]
  }
  
  
  export interface Item {
    value: string;
    displayText: string;
    isSelected: boolean
  }
  
  export interface Countries {
    languageNames: Item[];
    flags: Item[]
  }
  
  export interface PostLanguage {
    id: number;
    name: string;
    icon: string;
    isEnabled: boolean;
  }
  
  