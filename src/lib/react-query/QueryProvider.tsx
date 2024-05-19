import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactNode} from 'react'

const queryclient = new QueryClient();

export const QueryProvider = ({children}:{children:ReactNode}) => {
  return (
   <QueryClientProvider client={queryclient}>
        {children}
   </QueryClientProvider>
  )
}

