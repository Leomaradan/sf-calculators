export interface ILanguage {
  app: {
    home: string;
    title: string;
    tools: string;
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
    description: string;
    extractionGemTime: string;
    quartersTimeReduction: string;
    timeToFill: string;
    title: string;
    treasurySlot: string;
    unitArcher: string;
    unitLimit: string;
    unitMage: string;
    unitSoldier: string;
    upgradeHoK: string;
  };
  general: {
    count: string;
    day: string;
    dayShort: string;
    gold: string;
    hour: string;
    hourShort: string;
    max: string;
    minute: string;
    minuteShort: string;
    resources: string;
    second: string;
    secondShort: string;
    stone: string;
    wood: string;
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
