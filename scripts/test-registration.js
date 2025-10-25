const testRegistration = async () => {
  const timestamp = Date.now()
  const testUser = {
    name: 'Test User',
    email: `test${timestamp}@example.com`,
    password: 'TestPassword123!'
  }

  console.log('Testing registration with:', testUser.email)

  try {
    const response = await fetch('http://localhost:3000/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(testUser)
    })

    const data = await response.json()

    if (response.ok) {
      console.log('✅ Registration successful!')
      console.log('   User ID:', data.user?.id)
      console.log('   Username:', data.user?.username)
      console.log('   Message:', data.message)
    } else {
      console.log('❌ Registration failed:', data.error)
      if (data.error?.includes('relation "users" does not exist')) {
        console.log('\n⚠️  Database tables not yet created!')
        console.log('   Please run the SQL in your Supabase dashboard first')
      }
    }
  } catch (error) {
    console.error('❌ Connection error:', error.message)
    console.log('   Make sure the server is running on port 3000')
  }
}

testRegistration()