// Combined doctors and diagnostic centers data
// Each entry: { id, name, specialties: [], address, phone }
const doctors = [
  // Pediatricians (user-provided list)
  { id: 'dr-simal-sinha', name: 'Dr. Simal Sinha', specialties: ['Pediatrician'], address: '', phone: '' },
  { id: 'dr-smita-jha', name: 'Dr. Smita Jha', specialties: ['Pediatrician'], address: "Women's College Road", phone: '' },
  { id: 'dr-hemant-thakur', name: 'Dr. Hemant Thakur', specialties: ['Pediatrician'], address: '', phone: '' },
  { id: 'dr-sanjeev-kr', name: 'Dr. Sanjeev Kr', specialties: ['Pediatrician'], address: 'Adarsh Nagar Road', phone: '' },
  { id: 'dr-brajesh-kr', name: 'Dr. Brajesh Kr', specialties: ['Pediatrician'], address: 'Kashipur Dunga Tulles Road', phone: '' },
  { id: 'dr-nilesh-kr', name: 'Dr. Nilesh Kr', specialties: ['Pediatrician'], address: "Women's College Road", phone: '' },
  { id: 'dr-ak-kanchan', name: 'Dr. A.K. Kanchan', specialties: ['Pediatrician'], address: 'Vivele Bithor', phone: '' },
  { id: 'dr-vibha-ranjan', name: 'Dr. Vibha Ranjan', specialties: ['Pediatrician'], address: 'Adarsh Nagar', phone: '' },
  { id: 'dr-nishant-kr', name: 'Dr. Nishant Kr', specialties: ['Pediatrician'], address: 'Sonwarsha Chowk', phone: '' },
  { id: 'dr-pk-das', name: 'Dr. P.K. Das', specialties: ['Pediatrician'], address: 'Near Central Bank Main Market', phone: '' },
  { id: 'dr-chandarmani', name: 'Dr. Chandarmani', specialties: ['Pediatrician'], address: 'Near I.D.N. A.I.R Road', phone: '' },

  // Surgeons / Orthopedics
  { id: 'dr-sushant', name: 'Dr. Sushant Kumar', specialties: ['Surgery'], address: 'Near Patel Field', phone: '' },
  { id: 'dr-rajesh', name: 'Dr. Rajesh Kumar', specialties: ['Surgery'], address: 'Kashipur Girls High School Road', phone: '' },
  { id: 'dr-rk-mishra', name: 'Dr. R.K. Mishra', specialties: ['Surgery'], address: 'R.P. Mishra Road', phone: '' },
  { id: 'dr-dp-hiwani', name: 'Dr. D.P. Hiwani', specialties: ['Surgery'], address: 'Near Chaudhary Digitalel', phone: '' },
  { id: 'dr-sachin', name: 'Dr. Sachin', specialties: ['Orthopedics', 'Surgery'], address: 'Radiance Ortho Hospital', phone: '' },
  { id: 'dr-mahesh', name: 'Dr. Mahesh Kumar Thakur', specialties: ['Surgery'], address: 'Adarsh Nagar Road', phone: '' },

  // Dermatology
  { id: 'dr-gopal', name: 'Dr. Gopal Prasad', specialties: ['Dermatology'], address: 'Near Kranthi Hotel', phone: '' },
  { id: 'dr-reshma', name: 'Dr. Reshme Rani', specialties: ['Dermatology'], address: 'R.P. Mishra Road', phone: '' },
  { id: 'dr-saket', name: 'Dr. Saket Kumar', specialties: ['Dermatology'], address: 'R.P. Mishra Road (Near Nishant X-ray)', phone: '' },
  { id: 'dr-animesh', name: 'Dr. Animesh Kumar', specialties: ['Dermatology'], address: 'R.P. Mishra Road (Near Nishant X-ray)', phone: '' },
  { id: 'dr-dhananjay', name: 'Dr. Dhananjay', specialties: ['Dermatology'], address: 'R.P. Mishra Road (Nishant X-ray)', phone: '' },
  // Gynecologists (added per user)
  { id: 'dr-kiranti-kumar', name: 'Dr. Kiranti Kumar', specialties: ['Gynecologist'], address: 'Kashipur School Girls, Utya School Road', phone: '' },
  { id: 'dr-anupurna', name: 'Dr. Anupurna', specialties: ['Gynecologist'], address: 'Kashipur, Kachari Road', phone: '' },
  { id: 'dr-shimila-sinha', name: 'Dr. Shimila Sinha', specialties: ['Gynecologist'], address: 'Kashipur, Kachari Road', phone: '' },
  { id: 'dr-nilam-sinha', name: 'Dr. Nilam Sinha', specialties: ['Gynecologist'], address: 'Near Patel Field', phone: '' },
  { id: 'dr-ariti-thakur', name: 'Dr. Ariti Thakur', specialties: ['Gynecologist'], address: 'R.P. Mishra Road (Vishwat X-ray)', phone: '' },
  { id: 'dr-sanjini', name: 'Dr. Sanjini', specialties: ['Gynecologist'], address: 'Near Dominos, Kranti Hotel Road', phone: '' },
  { id: 'dr-renu-sahu', name: 'Dr. Renu Sahu', specialties: ['Gynecologist'], address: 'Near Dominos, Kranti Hotel Road', phone: '' },
  { id: 'dr-rk-jha', name: 'Dr. R.K. Jha', specialties: ['Gynecologist'], address: 'Near Kranti Hotel', phone: '' },
  { id: 'dr-durga-mehta', name: 'Dr. Durga Mehta', specialties: ['Gynecologist'], address: 'Near Kranti Hotel (Kindway Digilay Digily)', phone: '' },
  { id: 'dr-pratibha-koi', name: 'Dr. Pratibha Koi', specialties: ['Gynecologist'], address: 'Adarsh Nagar Road', phone: '' },
  { id: 'dr-shardha-thakur-kumari', name: 'Dr. Shardha Thakur Kumari', specialties: ['Gynecologist'], address: 'Adarsh Nagar Road', phone: '' },
  // Orthopedics (Ortho)
  { id: 'dr-alamgir-shams', name: 'Dr. Alamgir Shams', specialties: ['Orthopedics'], address: "Women's College Road", phone: '' },
  { id: 'dr-amanmath-jha', name: 'Dr. Amanmath Jha', specialties: ['Orthopedics'], address: "Women's College Road", phone: '' },
  { id: 'dr-uc-karan', name: 'Dr. U.C. Karan', specialties: ['Orthopedics'], address: 'Kashipur Girls High School Road', phone: '' },
  { id: 'dr-chandar-mani-roy', name: 'Dr. Chandar Mani Roy', specialties: ['Orthopedics'], address: 'R.P. Mishra Road', phone: '' },
  { id: 'dr-rajnikant', name: 'Dr. Rajnikant', specialties: ['Orthopedics'], address: 'Near Dominos, Kranti Hotel', phone: '' },
  { id: 'dr-avinash-kumar', name: 'Dr. Avinash Kumar', specialties: ['Orthopedics'], address: 'Near Dominos, Kranti Hotel', phone: '' },
  { id: 'dr-mk-ajay', name: 'Dr. M.K. Ajay', specialties: ['Orthopedics'], address: 'Near BRB College Mohanpur Road', phone: '' },
  { id: 'dr-abbas-kumar', name: 'Dr. Abbas Kumar', specialties: ['Orthopedics'], address: 'Near BRB College Mohanpur Road', phone: '' },
  { id: 'dr-k-sharma', name: 'Dr. K. Sharma', specialties: ['Orthopedics'], address: 'Mohanpur Road', phone: '' },

  // General Physicians
  { id: 'dr-nk-bhartiya', name: 'Dr. N.K. Bhartiya', specialties: ['General Physician'], address: "Women's College Road", phone: '' },
  { id: 'dr-k-ojha', name: 'Dr. K. Ojha', specialties: ['General Physician'], address: "Women's College Road", phone: '' },
  { id: 'dr-ak-misra-pandey', name: 'Dr. A.K. Misra Pandey', specialties: ['General Physician'], address: "Women's College Road", phone: '' },
  { id: 'dr-manoj-kumar-singh', name: 'Dr. Manoj Kumar Singh', specialties: ['General Physician'], address: 'Kashipur Girls High School Road', phone: '' },
  { id: 'dr-rajeev-ranjan', name: 'Dr. Rajeev Ranjan', specialties: ['General Physician'], address: 'Kashipur Girls High School Road', phone: '' },
  { id: 'dr-bn-prasad', name: 'Dr. B.N. Prasad', specialties: ['General Physician'], address: 'Kashipur Girls High School Road', phone: '' },
  { id: 'dr-r-kumari', name: 'Dr. R. Kumari', specialties: ['General Physician'], address: 'Kashipur Girls High School Road', phone: '' },
  { id: 'dr-bk-singh', name: 'Dr. B.K. Singh', specialties: ['General Physician'], address: 'Kashipur Hanuman Mandir', phone: '' },
  { id: 'dr-anand-kumar', name: 'Dr. Anand Kumar', specialties: ['General Physician'], address: 'K.E. Inter Road', phone: '' },
  { id: 'dr-prakash-kumar', name: 'Dr. Prakash Kumar', specialties: ['General Physician'], address: 'R.P. Mishra Road (Nishant X-ray)', phone: '' },
  { id: 'dr-n-jha', name: 'Dr. N. Jha', specialties: ['General Physician'], address: 'R.P. Mishra Road', phone: '' },
  { id: 'dr-satish-kr-sinha', name: 'Dr. Satish Kr. Sinha', specialties: ['General Physician'], address: 'R.P. Mishra Road', phone: '' },
  { id: 'dr-nitin-kumar', name: 'Dr. Nitin Kumar', specialties: ['General Physician'], address: 'R.P. Mishra Road', phone: '' },
  { id: 'dr-prabhakar-kumar', name: 'Dr. Prabhakar Kumar', specialties: ['General Physician'], address: 'R.P. Mishra Road', phone: '' },
  { id: 'dr-kumar-saurabh-jha', name: 'Dr. Kumar Saurabh Jha', specialties: ['General Physician'], address: 'R.R. Jha Clinic', phone: '' },
  { id: 'dr-pk-gupta', name: 'Dr. P.K. Gupta', specialties: ['General Physician'], address: 'Near Dominos Road, Kranti Hotel', phone: '' },
  { id: 'dr-vivek-kumar', name: 'Dr. Vivek Kumar', specialties: ['General Physician'], address: 'Barah Pathar', phone: '' },
  { id: 'dr-ak-aditya', name: 'Dr. A.K. Aditya', specialties: ['General Physician'], address: 'Barah Pathar', phone: '' },
  { id: 'dr-sk-chaudhary', name: 'Dr. S.K. Chaudhary', specialties: ['General Physician'], address: 'Near Sweta Surgical', phone: '' },
  { id: 'dr-sunil-kumar', name: 'Dr. Sunil Kumar', specialties: ['General Physician'], address: 'Near Kranti Hotel', phone: '' },
  { id: 'dr-pankaj-kumar', name: 'Dr. Pankaj Kumar', specialties: ['General Physician'], address: 'Vivek Bihar', phone: '' },
  { id: 'dr-jaishankar-jha', name: 'Dr. Jaishankar Jha', specialties: ['General Physician'], address: 'Vivek Bihar', phone: '' },
  { id: 'dr-mahesh-thakur', name: 'Dr. Mahesh Thakur', specialties: ['General Physician'], address: 'Adarsh Nagar Road', phone: '' },
  { id: 'dr-sanjeev-kumar', name: 'Dr. Sanjeev Kumar', specialties: ['General Physician'], address: 'Adarsh Nagar Road', phone: '' },

  // Surgeons
  { id: 'dr-sushant-kumar', name: 'Dr. Sushant Kumar', specialties: ['Surgeon'], address: 'Near Patel Field', phone: '' },
  { id: 'dr-rajesh-kumar', name: 'Dr. Rajesh Kumar', specialties: ['Surgeon'], address: 'Kashipur Girls High School Road', phone: '' },
  { id: 'dr-rk-mishra', name: 'Dr. R.K. Mishra', specialties: ['Surgeon'], address: 'R.P. Mishra Road', phone: '' },
  { id: 'dr-dp-tiwari', name: 'Dr. D.P. Tiwari', specialties: ['Surgeon'], address: 'Near Chaudhary Digital', phone: '' },
  { id: 'dr-sachin-kr', name: 'Dr. Sachin Kr.', specialties: ['Surgeon', 'Orthopedics'], address: 'Radiance Ortho Hospital', phone: '' },
  { id: 'dr-mahesh-kumar-thakur', name: 'Dr. Mahesh Kumar Thakur', specialties: ['Surgeon'], address: 'Adarsh Nagar Road', phone: '' },
];



export default doctors;
