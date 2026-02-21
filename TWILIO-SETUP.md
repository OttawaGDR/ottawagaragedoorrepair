# Step-by-step: Get SMS when someone books

When a customer books a slot on your site, you’ll get a text on **(613) 617-4238**. To make that work, you need to set up Twilio and add 3 things to your `.env` file.

---

## Part 1: Create a Twilio account and get a phone number

### Step 1 – Sign up for Twilio
1. Open your browser and go to: **https://www.twilio.com/try-twilio**
2. Click **Sign up** (or **Start for free**).
3. Enter your email and a password, then click **Start your free trial**.
4. On the next screen, answer the short questions (e.g. “What do you want to build?” → choose something like “SMS” or “Notifications”) and click **Submit**.
5. Verify your email or phone if Twilio asks you to.

### Step 2 – Get your Account SID and Auth Token
1. After you’re logged in, you should see the **Twilio Console** (dashboard).
2. On the **Home** or **Console** page, find the box that says **Account Info** or **Project Info**.
3. You’ll see:
   - **Account SID** – looks like `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`  
     → Copy this. (It’s already in your `.env` as `TWILIO_ACCOUNT_SID`.)
   - **Auth Token** – click **Show** next to it, then copy the token.  
     → You will paste this into `.env` as `TWILIO_AUTH_TOKEN` in Part 2.

### Step 3 – Get a Twilio phone number (the “from” number for texts)
1. In the left sidebar, click **Phone Numbers**.
2. Click **Manage** → **Buy a number** (or **Get a number**).
3. Choose your country (e.g. **United States** or **Canada**).
4. Check the box for **SMS** (and **Voice** if you want; SMS is enough for booking alerts).
5. Click **Search**.
6. Pick one of the numbers with a price (e.g. $1.15/month). Click **Buy** (or **Choose** then confirm).
7. After you buy it, you’ll see the number (e.g. +1 555 123 4567).  
   → Copy this number. You will add it to `.env` as `TWILIO_FROM_NUMBER` in Part 2.  
   **Important:** In `.env` it must be in one piece with a plus sign, e.g. `+15551234567` (no spaces, no brackets).

---

## Part 2: Put the values into your `.env` file

### Step 4 – Open your `.env` file
1. On your computer, go to your project folder:  
   `c:\Users\smile\OneDrive\Desktop\ottawagaragedoorrepair\ottawagaragedoorrepair`
2. Open the file named **`.env`** (no .txt) in Notepad or any text editor.  
   - If you don’t see it: in File Explorer, turn on “Show file name extensions” and “Show hidden files,” or open the folder in Cursor/VS Code and click `.env` in the file list.

### Step 5 – Add or fix the three Twilio lines
Your `.env` should have these three lines. Replace the placeholder values with your real ones:

```
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=paste_your_auth_token_here
TWILIO_FROM_NUMBER=+15551234567
```

- **TWILIO_ACCOUNT_SID** – Already set. Don’t change it unless you have a different Account SID.
- **TWILIO_AUTH_TOKEN** – Delete `paste_your_auth_token_here` (or `your_auth_token_here`) and paste the **Auth Token** you copied in Step 2. No spaces or quotes.
- **TWILIO_FROM_NUMBER** – Replace `+15551234567` with the Twilio number you bought in Step 3, in this format: `+1` then the 10 digits, e.g. `+16135551234`. No spaces, no dashes, no brackets.

Example (with fake values):

```
TWILIO_ACCOUNT_SID=ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
TWILIO_AUTH_TOKEN=abc123def456yourrealauthtoken
TWILIO_FROM_NUMBER=+16135551234
```

Save the `.env` file (Ctrl+S).

---

## Part 3: Restart the site and test

### Step 6 – Restart the dev server
1. In the terminal or Cursor window where the site is running (`npm run dev`), press **Ctrl+C** to stop it.
2. Run again: **`npm run dev`**
3. Wait until you see something like “Ready” and “Local: http://localhost:3005”.

### Step 7 – Send a test SMS
1. Open your browser.
2. Go to: **http://localhost:3005/api/booking/test-sms**
3. You should see a short message saying the test SMS was sent (and maybe “Check your phone”).
4. Check the phone for **(613) 617-4238** – you should get a text that says something like “Test from Ottawa Garage Door Repair booking – SMS is working…”

If you get that text, you’re done. From now on, when someone books a slot on your site, you’ll get an SMS on that same number with the booking details.

---

## If something doesn’t work

- **No text received**  
  - Make sure you restarted the dev server after changing `.env`.  
  - Check that `TWILIO_FROM_NUMBER` has no spaces (e.g. `+16135551234`).  
  - In Twilio Console → **Monitor** → **Logs** → **Messaging**, see if the message shows as “sent” or “failed.”

- **“Twilio not configured” or error on test-sms**  
  - Open `.env` and confirm all three Twilio lines are there and that you didn’t leave `your_auth_token_here` or a fake number.  
  - Save `.env`, then restart the dev server again.

- **Trial account**  
  - Twilio trial accounts can only send to **verified** phone numbers. In Twilio Console go to **Phone Numbers** → **Manage** → **Verified Caller IDs** and add (613) 617-4238, then complete the verification (they’ll send a code to that number).

Once the test SMS works, booking notifications will work the same way automatically.
