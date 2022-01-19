export interface ILanguage {
  app: {
    home: string;
    title: string;
    tools: string;
  };
  general: {
    gold: string;
    wood: string;
    stone: string;
    resources: string;
    count: string;
  };
  fortress: {
    buildingAcademy: string;
    buildingArchery: string;
    buildingBarracks: string;
    buildingFortifications: string;
    buildingFortress: string;
    buildingMageTower: string;
    buildingMine: string;
    buildingQuarry: string;
    buildingQuarters: string;
    buildingSmithy: string;
    buildingTreasury: string;
    buildingWoodcutter: string;
    title: string;
    description: string;
    unitArcher: string;
    unitMage: string;
    unitSoldier: string;
    upgradeHoK: string;
  };
}

export type KeysLanguageType = 'en-US' | 'fr-FR';

export interface ILanguageContextDefinition {
  allDictionary: { [key: string]: ILanguage };
  dictionary: ILanguage;
  userLanguage: KeysLanguageType;

  /**
   * Change the current language
   * @param selected
   */
  userLanguageChange(selected: KeysLanguageType): void;
}
