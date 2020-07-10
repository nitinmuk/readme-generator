// function to generate markdown for README
function generateMarkdown(data) {
    return `[![](https://img.shields.io/badge/License-${data.license}-green)](#license)
# ${data.projectTitle}
## Description
${data.projectDesc}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
${data.InstalInst}
## Usage
${data.usageInfo}
## Contributing
${data.contriGuide}
## Tests
${data.testInst}
## License
${data.license}
## Questions
* Please raise a request at [github](https://github.com/${data.gitHubUser})
* For any private question/enquiry, please reach out to my [email](https://mailto:${data.email})`;
  }  
  module.exports = generateMarkdown;  