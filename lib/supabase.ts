// Placeholder Supabase client for demo purposes
// This returns mock data to make the site look fully functional

export const supabase = {
  auth: {
    signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
      return {
        data: {
          user: { id: 'demo-user-id', email },
          session: {
            access_token: 'demo-access-token',
            refresh_token: 'demo-refresh-token',
          },
        },
        error: null,
      }
    },
    signUp: async ({ email, password, options }: any) => {
      return {
        data: {
          user: { id: 'demo-user-id', email },
          session: {
            access_token: 'demo-access-token',
            refresh_token: 'demo-refresh-token',
          },
        },
        error: null,
      }
    },
    signOut: async () => {
      return { error: null }
    },
    getSession: async () => {
      return {
        data: { session: null },
        error: null,
      }
    },
  },
  from: (table: string) => ({
    select: (columns: string) => ({
      eq: (column: string, value: any) => ({
        single: async () => ({
          data: null,
          error: { message: 'Demo mode - no data available' },
        }),
      }),
    }),
    insert: (data: any) => ({
      select: () => ({
        single: async () => ({
          data: null,
          error: null,
        }),
      }),
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => ({
        select: () => ({
          single: async () => ({
            data: null,
            error: null,
          }),
        }),
      }),
    }),
    delete: () => ({
      eq: (column: string, value: any) => ({
        single: async () => ({
          data: null,
          error: null,
        }),
      }),
    }),
  }),
}
