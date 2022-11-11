

// export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export type Colors =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'dark'
  | 'light'
  | string


// export const colorPropType = PropTypes.oneOfType([
//   PropTypes.oneOf([
//     'primary',
//     'secondary',
//     'success',
//     'danger',
//     'warning',
//     'info',
//     'dark',
//     'light',
//   ]),
//   PropTypes.string,
// ])

export type Placements =
  | 'auto'
  | 'top'
  | 'bottom'
  | 'right'
  | 'left'
  | undefined

// export const placementPropType = PropTypes.oneOf<Placements>([
//   'auto',
//   'auto-start',
//   'auto-end',
//   'top-end',
//   'top',
//   'top-start',
//   'bottom-end',
//   'bottom',
//   'bottom-start',
//   'right-start',
//   'right',
//   'right-end',
//   'left-start',
//   'left',
//   'left-end',
// ])

export type size =
  | 'small'
  | 'medium'
  | 'large'
// export type Shapes =
//   | 'rounded'
//   | 'rounded-top'
//   | 'rounded-end'
//   | 'rounded-bottom'
//   | 'rounded-start'
//   | 'rounded-circle'
//   | 'rounded-pill'
//   | 'rounded-0'
//   | 'rounded-1'
//   | 'rounded-2'
//   | 'rounded-3'
//   | string

// export const shapePropType = PropTypes.oneOfType([
//   PropTypes.oneOf([
//     'rounded',
//     'rounded-top',
//     'rounded-end',
//     'rounded-bottom',
//     'rounded-start',
//     'rounded-circle',
//     'rounded-pill',
//     'rounded-0',
//     'rounded-1',
//     'rounded-2',
//     'rounded-3',
//   ]),
//   PropTypes.string,
// ])


// export type TextColors =
//   | Colors
//   | 'white'
//   | 'muted'
//   | 'high-emphasis'
//   | 'medium-emphasis'
//   | 'disabled'
//   | 'high-emphasis-inverse'
//   | 'medium-emphasis-inverse'
//   | 'disabled-inverse'
//   | string

// export const textColorsPropType = PropTypes.oneOfType([
//   colorPropType,
//   PropTypes.oneOf(['white', 'muted']),
//   PropTypes.string,
// ])

// export type Triggers = 'hover' | 'focus' | 'click'

// export const triggerPropType = PropTypes.oneOf<Triggers>(['hover', 'focus', 'click'])

// export type IconName = 
// | 'action'
// | 'administration'
// | 'api_referances'
// | 'arrow_down'
// | 'arrow_left'
// | 'arrow_right'
// | 'arrow_up'
// | 'audit_logs'
// | 'award'
// | 'bag'
// | 'bar_chart'
// | 'basic_subscription'
// | 'blog'
// | 'book'
// | 'books'
// | 'brush'
// | 'calendar'
// | 'camera'
// | 'cancel'
// | 'card_data'
// | 'card_image'
// | 'careers'
// | 'cc'
// | 'check'
// | 'check_square'
// | 'chevron_down'
// | 'chevron_left'
// | 'chevron_right'
// | 'chevron_up'
// | 'circle'
// | 'circles'
// | 'clipboard'
// | 'clipboard_check'
// | 'clipboard_data'
// | 'clock'
// | 'close'
// | 'close_circle'
// | 'cloud_download'
// | 'cloud_upload'
// | 'code'
// | 'code_computer'
// | 'code_square'
// | 'computer'
// | 'cookies'
// | 'countries'
// | 'crop'
// | 'currency_dollar'
// | 'currency_dollar_circle'
// | 'customer'
// | 'daily_sales'
// | "dashboard_settings"
// | 'daily_sales'
// | 'dashboard_settings'
// | 'date_picker'
// | 'delete'
// | 'delete_file'
// | 'demo_ui'
// | 'direction'
// | 'dislike'
// |'dollar'
// |'down'
// |'down_arrow'
// |'download'
// |'download_data'
// |'download_receipt'
// |'dynamic_properties'
// |'edit'
// |'editions'
// |'empty_states_add_section'
// |'empty_states_add_nodes'
// |'empty_states_add_card'
// |'empty_states_add_records'
// |'empty_states_add_screens'
// |'envelope'
// |'exchange'
// |'exclamation_circle'
// |'exclamation_diamond'
// |'exclamation_triangle'
// |'export'
// |'export_data'
// |'eye'
// |'eye_slash'
// |'featured'
// |'features'
// |'file'
// |'file_data'
// |'file_plus'
// |'filter'
// |'folder'
// |'folder_search'
// |'fullscreen'
// |'fullscreen_square'
// |'funnel'
// |'gear'






export type countryList =
  "Afghanistan"
  | "Albania"
  | "Algeria"
  | "American Samoa"
  | "Andorra"
  | "Angola"
  | "Anguilla"
  | "Antarctica"
  | "Antigua and Barbuda"
  | "Argentina"
  | "Armenia"
  | "Aruba"
  | "Australia"
  | "Austria"
  | "Azerbaijan"
  | "Bahamas (the)"
  | "Bahrain"
  | "Bangladesh"
  | "Barbados"
  | "Belarus"
  | "Belgium"
  | "Belize"
  | "Benin"
  | "Bermuda"
  | "Bhutan"
  | "Bolivia (Plurinational State of)"
  | "Bonaire | Sint Eustatius and Saba"
  | "Bosnia and Herzegovina"
  | "Botswana"
  | "Bouvet Island"
  | "Brazil"
  | "British Indian Ocean Territory (the)"
  | "Brunei Darussalam"
  | "Bulgaria"
  | "Burkina Faso"
  | "Burundi"
  | "Cabo Verde"
  | "Cambodia"
  | "Cameroon"
  | "Canada"
  | "Cayman Islands (the)"
  | "Central African Republic (the)"
  | "Chad"
  | "Chile"
  | "China"
  | "Christmas Island"
  | "Cocos (Keeling) Islands (the)"
  | "Colombia"
  | "Comoros (the)"
  | "Congo (the Democratic Republic of the)"
  | "Congo (the)"
  | "Cook Islands (the)"
  | "Costa Rica"
  | "Croatia"
  | "Cuba"
  | "Curaçao"
  | "Cyprus"
  | "Czechia"
  | "Côte d'Ivoire"
  | "Denmark"
  | "Djibouti"
  | "Dominica"
  | "Dominican Republic (the)"
  | "Ecuador"
  | "Egypt"
  | "El Salvador"
  | "Equatorial Guinea"
  | "Eritrea"
  | "Estonia"
  | "Eswatini"
  | "Ethiopia"
  | "Falkland Islands (the) [Malvinas]"
  | "Faroe Islands (the)"
  | "Fiji"
  | "Finland"
  | "France"
  | "French Guiana"
  | "French Polynesia"
  | "French Southern Territories (the)"
  | "Gabon"
  | "Gambia (the)"
  | "Georgia"
  | "Germany"
  | "Ghana"
  | "Gibraltar"
  | "Greece"
  | "Greenland"
  | "Grenada"
  | "Guadeloupe"
  | "Guam"
  | "Guatemala"
  | "Guernsey"
  | "Guinea"
  | "Guinea-Bissau"
  | "Guyana"
  | "Haiti"
  | "Heard Island and McDonald Islands"
  | "Holy See (the)"
  | "Honduras"
  | "Hong Kong"
  | "Hungary"
  | "Iceland"
  | "India"
  | "Indonesia"
  | "Iran (Islamic Republic of)"
  | "Iraq"
  | "Ireland"
  | "Isle of Man"
  | "Israel"
  | "Italy"
  | "Jamaica"
  | "Japan"
  | "Jersey"
  | "Jordan"
  | "Kazakhstan"
  | "Kenya"
  | "Kiribati"
  | "Korea (the Democratic People's Republic of)"
  | "Korea (the Republic of)"
  | "Kuwait"
  | "Kyrgyzstan"
  | "Lao People's Democratic Republic (the)"
  | "Latvia"
  | "Lebanon"
  | "Lesotho"
  | "Liberia"
  | "Libya"
  | "Liechtenstein"
  | "Lithuania"
  | "Luxembourg"
  | "Macao"
  | "Madagascar"
  | "Malawi"
  | "Malaysia"
  | "Maldives"
  | "Mali"
  | "Malta"
  | "Marshall Islands (the)"
  | "Martinique"
  | "Mauritania"
  | "Mauritius"
  | "Mayotte"
  | "Mexico"
  | "Micronesia (Federated States of)"
  | "Moldova (the Republic of)"
  | "Monaco"
  | "Mongolia"
  | "Montenegro"
  | "Montserrat"
  | "Morocco"
  | "Mozambique"
  | "Myanmar"
  | "Namibia"
  | "Nauru"
  | "Nepal"
  | "Netherlands (the)"
  | "New Caledonia"
  | "New Zealand"
  | "Nicaragua"
  | "Niger (the)"
  | "Nigeria"
  | "Niue"
  | "Norfolk Island"
  | "Northern Mariana Islands (the)"
  | "Norway"
  | "Oman"
  | "Pakistan"
  | "Palau"
  | "Palestine | State of"
  | "Panama"
  | "Papua New Guinea"
  | "Paraguay"
  | "Peru"
  | "Philippines (the)"
  | "Pitcairn"
  | "Poland"
  | "Portugal"
  | "Puerto Rico"
  | "Qatar"
  | "Republic of North Macedonia"
  | "Romania"
  | "Russian Federation (the)"
  | "Rwanda"
  | "Réunion"
  | "Saint Barthélemy"
  | "Saint Helena | Ascension and Tristan da Cunha"
  | "Saint Kitts and Nevis"
  | "Saint Lucia"
  | "Saint Martin (French part)"
  | "Saint Pierre and Miquelon"
  | "Saint Vincent and the Grenadines"
  | "Samoa"
  | "San Marino"
  | "Sao Tome and Principe"
  | "Saudi Arabia"
  | "Senegal"
  | "Serbia"
  | "Seychelles"
  | "Sierra Leone"
  | "Singapore"
  | "Sint Maarten (Dutch part)"
  | "Slovakia"
  | "Slovenia"
  | "Solomon Islands"
  | "Somalia"
  | "South Africa"
  | "South Georgia and the South Sandwich Islands"
  | "South Sudan"
  | "Spain"
  | "Sri Lanka"
  | "Sudan (the)"
  | "Suriname"
  | "Svalbard and Jan Mayen"
  | "Sweden"
  | "Switzerland"
  | "Syrian Arab Republic"
  | "Taiwan"
  | "Tajikistan"
  | "Tanzania" | "United Republic of Tanzania"
  | "Thailand"
  | "Timor-Leste"
  | "Togo"
  | "Tokelau"
  | "Tonga"
  | "Trinidad and Tobago"
  | "Tunisia"
  | "Turkey"
  | "Turkmenistan"
  | "Turks and Caicos Islands (the)"
  | "Tuvalu"
  | "Uganda"
  | "Ukraine"
  | "United Arab Emirates"        |"The United Arab Emirates"        | "UAE"  
  | "United Kingdom of Great Britain and Northern Ireland"      | "UK"   | "United Kingdom"  | "The United Kingdom"   | "The United Kingdom of Great Britain and Northern Ireland"
  | "United States Minor Outlying Islands"         | "The United States Minor Outlying Islands"
  | "United States of America"          |"The United States of America"          | "USA"
  | "Uruguay"
  | "Uzbekistan"
  | "Vanuatu"
  | "Venezuela (Bolivarian Republic of)"
  | "Viet Nam"
  | "Virgin Islands (British)"
  | "Virgin Islands (U.S.)"
  | "Wallis and Futuna"
  | "Western Sahara"
  | "Yemen"
  | "Zambia"
  | "Zimbabwe"
  | "Åland Islands";


export type IndianStateList =
  "Andhra Pradesh"
  | "Arunachal Pradesh"
  | "Assam"
  | "Bihar"
  | "Chhattisgarh"
  | "Goa"
  | "Gujarat"
  | "Haryana"
  | "Himachal Pradesh"
  | "Jammu and Kashmir"
  | "Jharkhand"
  | "Karnataka"
  | "Kerala"
  | "Madhya Pradesh"
  | "Maharashtra"
  | "Manipur"
  | "Meghalaya"
  | "Mizoram"
  | "Nagaland"
  | "Odisha"
  | "Punjab"
  | "Rajasthan"
  | "Sikkim"
  | "Tamil Nadu"
  | "Telangana"
  | "Tripura"
  | "Uttarakhand"
  | "Uttar Pradesh"
  | "West Bengal"
  | "Andaman and Nicobar Islands"
  | "Chandigarh"
  | "Dadra and Nagar Haveli"
  | "Daman and Diu"
  | "Delhi"
  | "Lakshadweep"
  | "Puducherry"