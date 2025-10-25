#!/usr/bin/env node

/**
 * API Test Script for Punctual.AI
 * This script tests the Clients.AI API integration endpoints
 */

const API_KEY = 'test_api_key_123' // Use the test key from database
const BASE_URL = 'http://localhost:3000/api/v1'

async function testAPI() {
  console.log('🧪 Testing Punctual.AI API Integration...\n')

  // Test 1: Get API Documentation
  console.log('1️⃣ Testing API Documentation...')
  try {
    const docsResponse = await fetch(`${BASE_URL}/docs`)
    const docs = await docsResponse.json()
    console.log('✅ API Documentation accessible')
    console.log(`   Version: ${docs.info.version}`)
  } catch (error) {
    console.error('❌ Failed to get API docs:', error)
  }

  // Test 2: List Users
  console.log('\n2️⃣ Testing List Users...')
  try {
    const usersResponse = await fetch(`${BASE_URL}/users`, {
      headers: {
        'X-API-Key': API_KEY,
      },
    })
    const usersData = await usersResponse.json()

    if (usersResponse.ok) {
      console.log('✅ Users endpoint working')
      console.log(`   Found ${usersData.data?.length || 0} users`)
    } else {
      console.log('⚠️ Users endpoint returned error:', usersData.error)
    }
  } catch (error) {
    console.error('❌ Failed to list users:', error)
  }

  // Test 3: Create User
  console.log('\n3️⃣ Testing Create User...')
  try {
    const createUserResponse = await fetch(`${BASE_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key': API_KEY,
      },
      body: JSON.stringify({
        email: `test${Date.now()}@example.com`,
        name: 'API Test User',
        booking_duration: 30,
      }),
    })
    const userData = await createUserResponse.json()

    if (createUserResponse.ok) {
      console.log('✅ User created successfully')
      console.log(`   User ID: ${userData.data.id}`)
      console.log(`   Booking URL: ${userData.credentials.booking_url}`)

      // Test 4: Get Available Slots
      console.log('\n4️⃣ Testing Get Available Slots...')
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      const dateStr = tomorrow.toISOString().split('T')[0]

      const slotsResponse = await fetch(`${BASE_URL}/availability/slots`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': API_KEY,
        },
        body: JSON.stringify({
          user_id: userData.data.id,
          date: dateStr,
        }),
      })
      const slotsData = await slotsResponse.json()

      if (slotsResponse.ok) {
        console.log('✅ Slots endpoint working')
        console.log(`   Total slots: ${slotsData.meta?.total_slots || 0}`)
        console.log(`   Available slots: ${slotsData.meta?.available_slots || 0}`)
      } else {
        console.log('⚠️ Slots endpoint returned error:', slotsData.error)
      }

      // Test 5: Create Booking
      console.log('\n5️⃣ Testing Create Booking...')
      if (slotsData.data && slotsData.data.length > 0) {
        const firstSlot = slotsData.data.find((s: any) => s.available)

        if (firstSlot) {
          const bookingResponse = await fetch(`${BASE_URL}/bookings`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-API-Key': API_KEY,
            },
            body: JSON.stringify({
              user_id: userData.data.id,
              guest_name: 'John Doe',
              guest_email: 'john@example.com',
              start_time: firstSlot.start_time,
              end_time: firstSlot.end_time,
              notes: 'Test booking via API',
            }),
          })
          const bookingData = await bookingResponse.json()

          if (bookingResponse.ok) {
            console.log('✅ Booking created successfully')
            console.log(`   Booking ID: ${bookingData.data.id}`)
          } else {
            console.log('⚠️ Booking creation failed:', bookingData.error)
          }
        } else {
          console.log('⚠️ No available slots found for booking test')
        }
      }
    } else {
      console.log('⚠️ User creation failed:', userData.error)
    }
  } catch (error) {
    console.error('❌ Failed to create user:', error)
  }

  // Test 6: List Bookings
  console.log('\n6️⃣ Testing List Bookings...')
  try {
    const bookingsResponse = await fetch(`${BASE_URL}/bookings`, {
      headers: {
        'X-API-Key': API_KEY,
      },
    })
    const bookingsData = await bookingsResponse.json()

    if (bookingsResponse.ok) {
      console.log('✅ Bookings endpoint working')
      console.log(`   Found ${bookingsData.data?.length || 0} bookings`)
    } else {
      console.log('⚠️ Bookings endpoint returned error:', bookingsData.error)
    }
  } catch (error) {
    console.error('❌ Failed to list bookings:', error)
  }

  console.log('\n✨ API Testing Complete!')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('The API is ready for Clients.AI integration')
  console.log('Documentation available at: http://localhost:3000/api/v1/docs')
}

// Run tests
testAPI().catch(console.error)