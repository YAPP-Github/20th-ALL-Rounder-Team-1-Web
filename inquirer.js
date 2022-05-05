// eslint-disable-next-line
const { execSync } = require('child_process');
// eslint-disable-next-line
const inquirer = require('inquirer');

const choiceSep = new inquirer.Separator();

const jobs = {
  type: 'rawlist',
  name: 'job',
  message: '실행할 작업을 선택하세요.',
  choices: [
    {
      name: '💻 개발환경 실행',
      value: 'dev',
    },
    {
      name: '🐳 배포 빌드',
      value: 'build',
    },
    {
      name: '✔︎ 포멧, 린트 검사',
      value: 'valid',
    },
    choiceSep,
    { name: '🔚  종료', value: 'exit', short: '\n' },
    choiceSep,
  ],
};

process.on('exit', () => console.log('\n안녕히 가세요 👋'));

inquirer.prompt([jobs]).then(({ job }) => {
  if (job === 'exit') {
    process.exit();
  } else if (job) {
    execSync(`yarn ${job}`);
  }
});
