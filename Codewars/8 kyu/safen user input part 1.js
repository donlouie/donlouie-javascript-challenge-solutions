const htmlspecialchars = (formData) =>
	formData.replace(
		/[<>"&]/g,
		(char) =>
			({ '<': '&lt;', '>': '&gt;', '"': '&quot;', '&': '&amp;' }[char])
	);

// Function Export
module.exports = htmlspecialchars;

// Other Solution
// Solution #1
/*
function htmlspecialchars(formData) {
  return formData.replace(/&/g, "&amp;")
                 .replace(/"/g, "&quot;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;");
}
*/

// Solution  #2
/*
function htmlspecialchars(formData) {
  return formData.replace(/[<>"&]/g, ch => ({"<":"&lt;",">":"&gt;","\"":"&quot;","&":"&amp;"}[ch]));
}
*/
