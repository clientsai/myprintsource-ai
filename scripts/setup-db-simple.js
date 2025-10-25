const fs = require('fs')
const path = require('path')

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('📋 PUNCTUAL.AI DATABASE SETUP')
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('')
console.log('Your Supabase project is configured!')
console.log('Project: autmdlacdenfbggqsgmz')
console.log('')
console.log('To set up the database:')
console.log('')
console.log('1. Click this link to open your SQL editor:')
console.log('   👉 https://supabase.com/dashboard/project/autmdlacdenfbggqsgmz/sql/new')
console.log('')
console.log('2. Copy the ENTIRE contents of:')
console.log('   📄 ~/punctual-ai/supabase-schema.sql')
console.log('')
console.log('3. Paste into the SQL editor and click "Run"')
console.log('')
console.log('4. You should see "Success. No rows returned"')
console.log('')
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
console.log('')

// Also copy to clipboard if possible
const sqlPath = path.join(__dirname, '..', 'supabase-schema.sql')
if (fs.existsSync(sqlPath)) {
  const sql = fs.readFileSync(sqlPath, 'utf8')

  // Try to copy to clipboard
  const { exec } = require('child_process')
  exec(`echo "${sql.replace(/"/g, '\\"').replace(/\$/g, '\\$')}" | pbcopy`, (error) => {
    if (!error) {
      console.log('✅ SQL has been copied to your clipboard!')
      console.log('   Just paste it in the Supabase SQL editor')
    }
  })
}

console.log('')
console.log('Once complete, your app will be fully functional!')
console.log('')