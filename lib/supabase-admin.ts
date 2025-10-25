// Placeholder Supabase admin client for demo purposes
// This returns mock data to make the site look fully functional

export const supabaseAdmin = {
  auth: {
    signInWithPassword: async ({ email, password }: { email: string; password: string }) => {
      // Demo credentials for testing
      if (email === 'demo@myprintsource.com' && password === 'demo123') {
        return {
          data: {
            user: {
              id: 'demo-user-123',
              email: 'demo@myprintsource.com',
              created_at: new Date().toISOString(),
            },
            session: {
              access_token: 'demo-access-token-' + Date.now(),
              refresh_token: 'demo-refresh-token-' + Date.now(),
            },
          },
          error: null,
        }
      }
      // For any other credentials, also return success for demo
      return {
        data: {
          user: {
            id: 'demo-user-' + Date.now(),
            email,
            created_at: new Date().toISOString(),
          },
          session: {
            access_token: 'demo-access-token-' + Date.now(),
            refresh_token: 'demo-refresh-token-' + Date.now(),
          },
        },
        error: null,
      }
    },
    signUp: async ({ email, password, options }: any) => {
      return {
        data: {
          user: {
            id: 'demo-user-' + Date.now(),
            email,
            created_at: new Date().toISOString(),
          },
          session: {
            access_token: 'demo-access-token-' + Date.now(),
            refresh_token: 'demo-refresh-token-' + Date.now(),
          },
        },
        error: null,
      }
    },
    admin: {
      createUser: async ({ email, password, email_confirm, user_metadata }: any) => {
        return {
          data: {
            user: {
              id: 'demo-user-' + Date.now(),
              email,
              created_at: new Date().toISOString(),
            },
          },
          error: null,
        }
      },
    },
  },
  from: (table: string) => ({
    select: (columns: string = '*') => ({
      eq: (column: string, value: any) => ({
        single: async () => {
          // Return demo user profile
          if (table === 'users') {
            return {
              data: {
                id: value,
                email: 'demo@myprintsource.com',
                full_name: 'Demo User',
                username: 'demo-user',
                timezone: 'America/New_York',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
              },
              error: null,
            }
          }
          // Return demo availability
          if (table === 'availability') {
            return {
              data: [
                {
                  id: 'avail-1',
                  user_id: value,
                  day_of_week: 1,
                  start_time: '09:00',
                  end_time: '17:00',
                },
              ],
              error: null,
            }
          }
          return { data: null, error: null }
        },
        maybeSingle: async () => {
          if (table === 'users') {
            return {
              data: {
                id: value,
                email: 'demo@myprintsource.com',
                full_name: 'Demo User',
                username: 'demo-user',
                timezone: 'America/New_York',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString(),
              },
              error: null,
            }
          }
          return { data: null, error: null }
        },
      }),
      order: (column: string, options?: any) => ({
        limit: (count: number) => async () => {
          // Return demo bookings/projects
          if (table === 'bookings') {
            return {
              data: [
                {
                  id: 'booking-1',
                  title: 'Business Card AI Optimization',
                  status: 'confirmed',
                  start_time: new Date(Date.now() + 86400000).toISOString(),
                  end_time: new Date(Date.now() + 90000000).toISOString(),
                  created_at: new Date().toISOString(),
                },
                {
                  id: 'booking-2',
                  title: 'Brochure Print Project',
                  status: 'pending',
                  start_time: new Date(Date.now() + 172800000).toISOString(),
                  end_time: new Date(Date.now() + 176400000).toISOString(),
                  created_at: new Date().toISOString(),
                },
              ],
              error: null,
            }
          }
          return { data: [], error: null }
        },
      }),
    }),
    insert: (data: any) => ({
      select: () => ({
        single: async () => {
          // Return the inserted data with an ID
          return {
            data: { id: 'demo-' + Date.now(), ...data },
            error: null,
          }
        },
      }),
    }),
    update: (data: any) => ({
      eq: (column: string, value: any) => ({
        select: () => ({
          single: async () => {
            return {
              data: { id: value, ...data },
              error: null,
            }
          },
        }),
      }),
    }),
    delete: () => ({
      eq: (column: string, value: any) => async () => ({
        data: null,
        error: null,
      }),
    }),
  }),
}
