/* eslint-disable @typescript-eslint/no-var-requires */
const { promisify } = require('util')
const exec = promisify(require('child_process').exec)

const projectName = 'name-here'

async function executeCommandWithAnimation(command, log, animationDelay) {
  // ANSI escape codes
  const setColor = (colorCode) => `\x1b[${colorCode}m`
  const resetColor = '\x1b[0m'
  const hideCursor = '\x1b[?25l'
  const showCursor = '\x1b[?25h'

  // Text colors
  const blueColor = setColor(34)
  const greenColor = setColor(32)
  const redColor = setColor(31)

  // Text messages
  const infoText = `${blueColor}info${resetColor}`
  const successText = `${greenColor}Command successfully executed:${resetColor}`
  const errorText = `${redColor}\nError executing command:${resetColor}`

  const animationFrames = [
    ``,
    `${blueColor}.${resetColor}`,
    `${blueColor}..${resetColor}`,
    `${blueColor}...${resetColor}`,
  ]
  let frameIndex = 0
  const interval = setInterval(() => {
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(
      `${hideCursor}- ${infoText} ${log}${animationFrames[frameIndex]}`,
    )
    frameIndex = (frameIndex + 1) % animationFrames.length
  }, animationDelay)

  try {
    await exec(command)
  } catch (error) {
    console.log(`${errorText} ${command}`)
    console.error(error)
    clearInterval(interval)
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    return
  } finally {
    clearInterval(interval)
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    process.stdout.write(showCursor)
  }

  console.log(`${successText} ${command}`)
}

async function executeAsync() {
  // exclui o repositorio e cria dnv
  await executeCommandWithAnimation(
    `rm -rf ${projectName} && mkdir ${projectName}`,
    'Creating folder',
    1000,
  )

  // copia arquivos
  await executeCommandWithAnimation(
    `cp package*.json next.config.js githash-log.txt start.sh .env.production ${projectName}`,
    'Copying files',
    1000,
  )

  // copia as pastas
  await executeCommandWithAnimation(
    `cp -r .next node_modules public ${projectName}`,
    'Copying folders',
    1000,
  )

  // zipa
  await executeCommandWithAnimation(
    `tar -czf ${projectName}.tar.gz ${projectName}`,
    'Zipping files',
    1000,
  )

  // exclui a pasta dps de zipar
  await executeCommandWithAnimation(
    `rm -rf ${projectName}`,
    'Deleting build folder',
    1000,
  )
}

executeAsync()
