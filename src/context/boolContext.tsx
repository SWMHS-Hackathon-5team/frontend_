import React, { createContext, useContext, useState, ReactNode } from 'react'

// Boolean 컨텍스트의 타입 정의
interface BooleanContextType {
  value: boolean
  _setValue: (value: boolean) => void
}

// Boolean 컨텍스트 생성
const BooleanContext = createContext<BooleanContextType | undefined>(undefined)

// Provider 컴포넌트
interface BooleanProviderProps {
  children: ReactNode
}

export const BooleanProvider: React.FC<BooleanProviderProps> = ({
  children,
}) => {
  const [value, setValue] = useState<boolean>(true)

  const _setValue = (value: boolean) => {
    setValue(value)
  }

  return (
    <BooleanContext.Provider value={{ value, _setValue }}>
      {children}
    </BooleanContext.Provider>
  )
}

// Context를 사용하는 커스텀 훅
export const useBoolean = (): BooleanContextType => {
  const context = useContext(BooleanContext)
  if (!context) {
    throw new Error('useBoolean must be used within a BooleanProvider')
  }
  return context
}
