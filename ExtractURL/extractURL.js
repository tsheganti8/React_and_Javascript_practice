// Function to extract the URL
function extractURL() {
    const nodes = document.querySelectorAll('code[data-class^="23"] div[data-tag$="93"] span[data-id*="21"] i.char');
    let url = 'https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge';
  
    nodes.forEach(node => {
      url += node.getAttribute('value');
    });
  
    return url;
  }
  
  // Run the function and log the URL
  const hiddenURL = extractURL();
  console.log('Hidden URL:', hiddenURL);
  