let i = 0;
while (i < 10) {
    i++;
    if (i === 2) {
        continue; // Skip the rest of the loop when i is 2
    }
    if (i === 4) {
        break; // Exit the loop when i is 4
    }
    console.log(i);
}