import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), '.data');
const FILE_PATH = path.join(DATA_DIR, 'booked-slots.json');

// In-memory fallback when file system is read-only (e.g. Vercel serverless)
let memorySlots = [];

function ensureDir() {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    return true;
  } catch {
    return false;
  }
}

function readSlots() {
  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, 'utf8');
      const parsed = JSON.parse(data);
      return Array.isArray(parsed) ? parsed : [];
    }
  } catch (e) {
    console.warn('[bookedSlots] read failed:', e.message);
  }
  return memorySlots;
}

function writeSlots(slots) {
  try {
    if (ensureDir()) {
      fs.writeFileSync(FILE_PATH, JSON.stringify(slots, null, 0), 'utf8');
      return true;
    }
  } catch (e) {
    console.warn('[bookedSlots] write failed (e.g. read-only fs):', e.message);
  }
  memorySlots = slots;
  return false;
}

/** @returns {string[]} Array of "YYYY-MM-DD|9:00 AM" */
export function getBookedSlots() {
  return readSlots();
}

/** Add a slot. @param {string} date - YYYY-MM-DD, @param {string} timeSlot - e.g. "9:00 AM" */
export function addBookedSlot(date, timeSlot) {
  const key = `${date}|${timeSlot}`;
  const slots = readSlots();
  if (slots.includes(key)) return;
  slots.push(key);
  writeSlots(slots);
}
