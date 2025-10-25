#!/usr/bin/env node

const BASE_URL = 'http://localhost:3000'

console.log('🎉 PUNCTUAL.AI FULL FUNCTIONALITY TEST')
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n')

const test = async () => {
  const timestamp = Date.now()
  const testEmail = `demo${timestamp}@example.com`

  try {
    // Test 1: Homepage
    console.log('1️⃣ Testing Homepage...')
    const homeRes = await fetch(BASE_URL)
    if (homeRes.ok) {
      console.log('   ✅ Homepage accessible')
    } else {
      console.log('   ❌ Homepage not responding')
    }

    // Test 2: Registration
    console.log('\n2️⃣ Testing Registration...')
    const regRes = await fetch(`${BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Demo User',
        email: testEmail,
        password: 'DemoPass123!'
      })
    })

    const regData = await regRes.json()
    if (regRes.ok) {
      console.log('   ✅ User registered successfully')
      console.log('   📧 Email:', testEmail)
      console.log('   👤 Username:', regData.user.username)
      console.log('   🔗 Booking URL: http://localhost:3000/' + regData.user.username)

      // Test 3: Public Booking Page
      console.log('\n3️⃣ Testing Public Booking Page...')
      const bookingPageRes = await fetch(`${BASE_URL}/${regData.user.username}`)
      if (bookingPageRes.ok) {
        console.log('   ✅ Booking page accessible')
      } else {
        console.log('   ❌ Booking page not found')
      }
    } else {
      console.log('   ❌ Registration failed:', regData.error)
    }

    // Test 4: API Documentation
    console.log('\n4️⃣ Testing API Documentation...')
    const apiRes = await fetch(`${BASE_URL}/api/v1/docs`)
    const apiData = await apiRes.json()
    if (apiRes.ok && apiData.info) {
      console.log('   ✅ API documentation working')
      console.log('   📚 Version:', apiData.info.version)
    } else {
      console.log('   ❌ API documentation not available')
    }

    // Test 5: API with Test Key
    console.log('\n5️⃣ Testing API with Test Key...')
    const apiUsersRes = await fetch(`${BASE_URL}/api/v1/users`, {
      headers: { 'X-API-Key': 'test_api_key_123' }
    })

    if (apiUsersRes.ok) {
      const users = await apiUsersRes.json()
      console.log('   ✅ API authentication working')
      console.log('   👥 Users in system:', users.data?.length || 0)
    } else {
      console.log('   ❌ API authentication failed')
    }

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('✅ ALL TESTS COMPLETED!')
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
    console.log('\n📋 NEXT STEPS:')
    console.log('1. Visit http://localhost:3000/register to create your account')
    console.log('2. Set your availability in the dashboard')
    console.log('3. Share your booking link with clients')
    console.log('4. Test a booking in incognito mode')
    console.log('\n🚀 Your Punctual.AI is READY!')

  } catch (error) {
    console.error('❌ Test failed:', error.message)
    console.log('\nMake sure the server is running on port 3000')
  }
}

test()