// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// this function also adds the link to the badge
function renderLicenseBadge(license, licenseSection) {

  // iterate through all selected licenses to build a string of badges and a bulleted
  // list of licenses
  for (i = 0; i < license.length; i++) {
    if (license[i] === 'MIT') {
      licenseSection.badges = licenseSection.badges + '[![license](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT) ';
    }
    else if (license[i] === 'Apache') {
      licenseSection.badges = licenseSection.badges + '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0) ';
    }
    else if (license[i] === 'GPLv2') {
      licenseSection.badges = licenseSection.badges + '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html) ';
    }
    else if (license[i] === 'GPLv3') {
      licenseSection.badges = licenseSection.badges + '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0) ';
    }
    else {
      licenseSection.badges = licenseSection.badges + '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause) ';
    }

    licenseSection.list = licenseSection.list + license[i] + '<br/>';

  }

  return licenseSection
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// This is done in renderLicenseBadge above

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = {
    badges: '',
    list: ''
  };

  // if there are licenses, add corresponding badges. Otherwise return empty strings
  if (license) {
    return renderLicenseBadge(license, licenseSection);
  }
  else {
    return licenseSection;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${licenseSection.badges}

  ## Description:
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licenses](#licenses)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## Licenses:
  ${licenseSection.list}

  ## Contribution:
  ${data.contributors}

  ## Tests:
  ${data.test}

  ## Questions:
  https://github.com/${data.github}

  For additional questions reach out to: ${data.email}
`;
}

module.exports = generateMarkdown;
