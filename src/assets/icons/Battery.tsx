import React from 'react'

type PropsType = 'full' | 'half' | 'quarter' | 'threeQuarter' | 'none'

export const Battery = ({ type = 'none' }: { type?: PropsType }) => {
  return (
    <svg
      width='85'
      height='85'
      viewBox='0 0 85 85'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='85' height='85' rx='42.5' fill='#282A2E' />
      <path
        d='M43 27H34C33 30.8333 30.5 43 30.5 43C36 43 39.5 47 39.5 53H51.5M51.5 53C51.5 55.4853 53.5147 57.5 56 57.5C58.4853 57.5 60.5 55.4853 60.5 53C60.5 50.5147 58.4853 48.5 56 48.5C53.5147 48.5 51.5 50.5147 51.5 53ZM34 53C34 55.4853 31.9853 57.5 29.5 57.5C27.0147 57.5 25 55.4853 25 53C25 50.5147 27.0147 48.5 29.5 48.5C31.9853 48.5 34 50.5147 34 53Z'
        stroke='white'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='42.5' cy='42.5' r='33.5' stroke='#45474D' strokeWidth='4' />
      {(() => {
        switch (type) {
          case 'full':
            return (
              <React.Fragment>
                <path
                  d='M43 76C61.2254 76 76 61.0015 76 42.5C76 23.9985 61.2254 9 43 9'
                  stroke='#66F1B5'
                  strokeWidth='4'
                  strokeLinecap='round'
                />
                <path
                  d='M42 76C23.7746 76 9 61.0015 9 42.5C9 23.9985 23.7746 9 42 9'
                  stroke='#66F1B5'
                  strokeWidth='4'
                  strokeLinecap='round'
                />
              </React.Fragment>
            )
          case 'half':
            return (
              <React.Fragment>
                <path
                  d='M43 27H34C33 30.8333 30.5 43 30.5 43C36 43 39.5 47 39.5 53H51.5M51.5 53C51.5 55.4853 53.5147 57.5 56 57.5C58.4853 57.5 60.5 55.4853 60.5 53C60.5 50.5147 58.4853 48.5 56 48.5C53.5147 48.5 51.5 50.5147 51.5 53ZM34 53C34 55.4853 31.9853 57.5 29.5 57.5C27.0147 57.5 25 55.4853 25 53C25 50.5147 27.0147 48.5 29.5 48.5C31.9853 48.5 34 50.5147 34 53Z'
                  stroke='white'
                  stroke-width='3'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M43 76C61.2254 76 76 61.0015 76 42.5C76 23.9985 61.2254 9 43 9'
                  stroke='#66F1B5'
                  stroke-width='4'
                  stroke-linecap='round'
                />
              </React.Fragment>
            )
          case 'quarter':
            return (
              <React.Fragment>
                <path
                  d='M76 42.5C76 23.9985 61.2254 9 43 9'
                  stroke='#66F1B5'
                  stroke-width='4'
                  stroke-linecap='round'
                />
              </React.Fragment>
            )
          case 'threeQuarter':
            return (
              <React.Fragment>
                <path
                  d='M43 76C61.2254 76 76 61.0015 76 42.5C76 23.9985 61.2254 9 43 9'
                  stroke='#66F1B5'
                  stroke-width='4'
                  stroke-linecap='round'
                />
                <path
                  d='M76 43C76 61.2254 61.0015 76 42.5 76C23.9985 76 9 61.2254 9 43'
                  stroke='#66F1B5'
                  stroke-width='4'
                  stroke-linecap='round'
                />
              </React.Fragment>
            )
          case 'none':
          default:
            return null
        }
      })()}
    </svg>
  )
}
