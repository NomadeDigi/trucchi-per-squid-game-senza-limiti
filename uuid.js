// uuid.js
// Simple UUID v4 generator
// For educational purposes only

const UUID = {
  generate() {
    // Generates a RFC4122 version 4 UUID (random)
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
};

// Example usage:
// const id = UUID.generate();
// console.log('Generated UUID:', id);

export default UUID;
