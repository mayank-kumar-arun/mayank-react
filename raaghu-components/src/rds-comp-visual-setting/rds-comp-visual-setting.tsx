import React, { useState, useEffect, useReducer } from "react";
import { RdsButton, RdsCheckbox, RdsLabel, RdsIcon } from "../rds-elements";
import "./rds-comp-visual-setting.scss";

export interface RdsCompVisualSettingProps {
  visualsettingsItem: any[];
  navtabItems: any[];
  listskin: any[];
  listSubmenu: any[];
  visualSettingHeader: any[];
  visualSettingSubHeader: any[];
  isShimmer?: boolean;
  onSaveVisualSettingsData?: (visualsettingsItem: any[]) => void;
  indexEmitter: any;
  themeItem: any[];
}

const RdsCompVisualSetting = (props: RdsCompVisualSettingProps) => {
  const [activeTheme, setActiveTheme] = useState("default");
  const [activeTab, setActiveTab] = useState(
    props.navtabItems.filter((tabs) => tabs.themeId == activeTheme)[0]
      .navtabs[0].id
  );

  const onSetActiveTheme = (themeId: any) => {
    setActiveTheme(themeId);
    setActiveTab(
      props.navtabItems.filter((tabs) => tabs.themeId == themeId)[0].navtabs[0]
        .id
    );
  };

  const onTabSelect = (id: any) => {
    setActiveTab(id);
  };
  const onSaveVisualSettings = () => {
    props.onSaveVisualSettingsData!=undefined && props.onSaveVisualSettingsData(props.visualsettingsItem)
  };

  useEffect(() => {
    onTabSelect;
  }, [activeTheme, activeTab]);

  return (
    <>
      <div className="row">
        <div className="col-md-12">
          <div className="card p-2 border-0 rounded-0 vh-88">
            <div className="row pt-4 theam-cards">
              {props.themeItem.map((theme) => (
                <div className="col-md-4 mb-4" key={theme.themeId}>
                  <div
                    className={`d-inline-block p-3 pb-0 ${
                      activeTheme == theme.themeId
                        ? "themeActivate"
                        : "themeInactivate"
                    }`}
                  >
                    <div
                      className="p-0"
                      onClick={() => onSetActiveTheme(theme.themeId)}
                      style={{ cursor: "pointer" }}
                    >
                      <img src={theme.imgsrc} className="w-100" />
                    </div>
                    <div className="col-md-12">
                      <h6 className="text-center"></h6>
                    </div>

                    <div className="p-2">
                      <h5 className="text-center">{theme.theme}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Start NavTabs and Setting Options from here */}

            <div className="row ps-3 navsm-p-0">
              <div className="navtabs-wrapper-div">
                <ul className="nav nav-tabs-our-custom">
                  {props.navtabItems
                    .filter((tabs) => tabs.themeId == activeTheme)[0]
                    .navtabs.map((navtabsItem: any) => (
                      <li className="nav-item" key={navtabsItem.id}>
                        <a
                          className={
                            "nav-link pe-4 ps-4 " +
                            (navtabsItem.id === activeTab
                              ? "active "
                              : "inactive") +
                            (navtabsItem.disabled ? "disabled " : "")
                          }
                          aria-current="page"
                          data-bs-target={navtabsItem.tablink}
                          aria-controls={navtabsItem.ariacontrols}
                          onClick={() => setActiveTab(navtabsItem.id)}
                        >
                          {navtabsItem.icon && (
                            <span className="pe-3">
                              <RdsIcon
                                name={navtabsItem.icon}
                                height="20px"
                                width="20px"
                                stroke={true}
                              />
                            </span>
                          )}
                          <span>{navtabsItem.label}</span>
                        </a>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="tab-content" id="headerbar">
                {activeTab == "subheader" && (
                  <div
                    className="  p-4"
                    id="nav-subheader"
                    role="tabpanel"
                    aria-labelledby="nav-subheader"
                  >
                    <RdsCheckbox
                      label="Fixed SubHeader"
                      checked={
                        props.visualsettingsItem.filter(
                          (item) => item.themeId == activeTheme
                        )[0]?.subHeader?.fixedSubHeader
                      }
                    />
                    <div className="form-group mb-3 mt-3">
                      <RdsButton
                        label="SAVE AS SYSTEM DEFAULT"
                        colorVariant="primary"
                        block={false}
                        size="small"
                        tooltipTitle={""}
                        type="submit"
                        onClick={onSaveVisualSettings}
                        icon="plus"
                        iconColorVariant="light"
                      />
                    </div>
                  </div>
                )}

                {activeTab == "menu" && (
                  <div
                    className="  p-4"
                    id="nav-Menu"
                    role="tabpanel"
                    aria-labelledby="nav-Menu"
                  >
                    {props.listskin && (
                      <div className="col-lg-4 col-md-6 mb-3 mt-1">
                        <label className="mb-2">Skin</label>
                        <select
                          defaultValue={"DEFAULT"}
                          className="form-select form-select-sm text-muted"
                          aria-label=".form-select-sm example"
                        >
                          <option value="DEFAULT" disabled hidden>
                            {
                              props.visualsettingsItem.filter(
                                (item) => item.themeId == activeTheme
                              )[0]?.menu?.asideSkin
                            }
                          </option>
                          {props.listskin.map((skin: any) => (
                            <option value={skin.value} key={skin.value}>
                              {skin.displayText}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                    <div className="form-group mb-3 mt-2">
                      <RdsCheckbox
                        label="Fixed Aside"
                        checked={
                          props.visualsettingsItem.filter(
                            (item) => item.themeId == activeTheme
                          )[0]?.menu?.fixedAside
                        }
                      />

                      <RdsCheckbox
                        label="Allow Aside Minimizing"
                        checked={
                          props.visualsettingsItem.filter(
                            (item) => item.themeId == activeTheme
                          )[0]?.menu?.allowAsideMinimizing
                        }
                      />

                      <RdsCheckbox
                        label="Default Minimised Aside"
                        checked={
                          props.visualsettingsItem.filter(
                            (item) => item.themeId == activeTheme
                          )[0]?.menu?.defaultMinimizedAside
                        }
                      />

                      <RdsCheckbox
                        label="Expand Menu when Hovered"
                        checked={
                          props.visualsettingsItem.filter(
                            (item) => item.themeId == activeTheme
                          )[0]?.menu?.hoverableAside
                        }
                      />
                    </div>

                    {props.listSubmenu && (
                      <div className=" col-md-4 mb-3 mt-1">
                        <label className="mb-2">Submenu Toggle</label>
                        <select
                          defaultValue={"DEFAULT"}
                          className="form-select form-select-sm text-muted"
                          aria-label=".form-select-sm example"
                        >
                          <option value="DEFAULT" disabled hidden>
                            {
                              props.visualsettingsItem.filter(
                                (item) => item.themeId == activeTheme
                              )[0]?.menu?.asideSkin
                            }
                          </option>
                          {props.listSubmenu.map((submenu: any) => (
                            <option defaultValue={submenu.value} key={submenu.value}>
                              {submenu.displayText}
                            </option>
                          ))}
                        </select>
                        <div className="form-group mb-3 mt-3">
                          <RdsButton
                            label="SAVE AS SYSTEM DEFAULT"
                            colorVariant="primary"
                            block={false}
                            size="small"
                            tooltipTitle={""}
                            type="submit"
                            onClick={onSaveVisualSettings}
                            icon="plus"
                            iconColorVariant="light"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab == "footer" && (
                  <div
                    className="  p-4"
                    id="nav-footer"
                    role="tabpanel"
                    aria-labelledby="nav-footer"
                  >
                    <RdsCheckbox
                      label="Fixed Footer"
                      checked={
                        props.visualsettingsItem.filter(
                          (item) => item.themeId == activeTheme
                        )[0]?.footer?.fixedFooter
                      }
                    />
                    <div className="form-group mb-3 mt-3">
                      <RdsButton
                        label="SAVE AS SYSTEM DEFAULT"
                        colorVariant="primary"
                        block={false}
                        size="small"
                        tooltipTitle={""}
                        type="submit"
                        onClick={onSaveVisualSettings}
                        icon="plus"
                        iconColorVariant="light"
                      />
                    </div>
                  </div>
                )}

                {activeTab == "header" && (
                  <div className="tab-content" id="headerbar">
                    <div
                      className="  p-4 navsm-p-0"
                      id="nav-headerbar"
                      role="tabpanel"
                      aria-labelledby="nav-headerbar"
                    >
                      <div className="row">
                        <div className="col-md-4">
                          {props.listskin && (
                            <div className="mb-3 mt-1">
                              <label className="mb-2">Skin</label>
                              <select
                                defaultValue={"DEFAULT"}
                                className="form-select form-select-sm text-muted"
                                aria-label=".form-select-sm example"
                              >
                                <option value="DEFAULT" disabled hidden>
                                  {
                                    props.visualsettingsItem.filter(
                                      (item) => item.themeId == activeTheme
                                    )[0]?.menu?.asideSkin
                                  }
                                </option>
                                {props.listskin.map((skin: any) => (
                                  <option value={skin.value} key={skin.value}>
                                    {skin.displayText}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}

                          <div className="form-group mb-3">
                            <label className="mt-4 mb-2">Desktop</label>
                            <RdsCheckbox
                              label="Fixed Header"
                              checked={
                                props.visualsettingsItem.filter(
                                  (item) => item.themeId == activeTheme
                                )[0]?.header?.desktopFixedHeader
                              }
                            />
                            <label className="mt-4 mb-2">Mobile</label>
                            <RdsCheckbox
                              label="Fixed Header"
                              checked={
                                props.visualsettingsItem.filter(
                                  (item) => item.themeId == activeTheme
                                )[0]?.header?.mobileFixedHeader
                              }
                            />
                          </div>
                          <div className="form-group mb-3 mt-3">
                            <RdsButton
                              label="SAVE AS SYSTEM DEFAULT"
                              colorVariant="primary"
                              block={false}
                              size="small"
                              tooltipTitle={""}
                              type="submit"
                              onClick={onSaveVisualSettings}
                              icon="plus"
                              iconColorVariant="danger"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RdsCompVisualSetting;
