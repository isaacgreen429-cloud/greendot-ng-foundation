<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Greendot Ng Foundation</title>
    <meta name="description" content="Greendot Ng Foundation empowers lives through education, cancer support, and community welfare across Nigeria.">
    <meta name="keywords" content="Greendot Ng Foundation, NGO Nigeria, Charity, Education, Cancer Support, Community Welfare">
    <meta name="author" content="Greendot Ng Foundation">
    <meta name="theme-color" content="#059669">
    <link rel="icon" href="https://i.ibb.co/sRZzSTH/greendot-logo.png" type="image/png">
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://js.paystack.co/v1/inline.js"></script>
    <style>
      :root {
        --greendot-primary: #059669;
        --greendot-dark: #064e3b;
        --greendot-light: #d1fae5;
      }
      body {
        font-family: 'Inter', sans-serif;
      }
    </style>
  </head>

  <body class="bg-gray-50 text-gray-800">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <div class="container mx-auto flex justify-between items-center p-4">
        <h1 class="text-2xl font-bold text-[var(--greendot-primary)]">
          Greendot Ng Foundation
        </h1>
        <nav class="hidden md:flex space-x-6 text-gray-700">
          <a href="#about" class="hover:text-[var(--greendot-primary)]">About</a>
          <a href="#work" class="hover:text-[var(--greendot-primary)]">Our Work</a>
          <a href="#donate" class="hover:text-[var(--greendot-primary)]">Donate</a>
          <a href="#contact" class="hover:text-[var(--greendot-primary)]">Contact</a>
          <a href="#suggestions" class="hover:text-[var(--greendot-primary)]">Updates</a>
        </nav>
        <button class="md:hidden text-[var(--greendot-primary)] focus:outline-none" id="menu-btn">
          ☰
        </button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="hidden bg-white shadow-md md:hidden">
      <nav class="flex flex-col p-4 space-y-2">
        <a href="#about" class="hover:text-[var(--greendot-primary)]">About</a>
        <a href="#work" class="hover:text-[var(--greendot-primary)]">Our Work</a>
        <a href="#donate" class="hover:text-[var(--greendot-primary)]">Donate</a>
        <a href="#contact" class="hover:text-[var(--greendot-primary)]">Contact</a>
        <a href="#suggestions" class="hover:text-[var(--greendot-primary)]">Updates</a>
      </nav>
    </div>

    <!-- Hero Section -->
    <section class="bg-[var(--greendot-light)] text-center py-16 px-4">
      <h2 class="text-4xl font-bold text-[var(--greendot-dark)]">
        Empowering Lives, One Step at a Time
      </h2>
      <p class="mt-4 text-lg text-gray-700">
        Together we can bring hope and opportunities to children, families, and communities.
      </p>
      <a
        href="#donate"
        class="mt-6 inline-block bg-[var(--greendot-primary)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--greendot-dark)] transition"
        >Donate Now</a
      >
    </section>

    <!-- About Section -->
    <section id="about" class="container mx-auto py-16 px-4">
      <h3 class="text-3xl font-semibold text-center mb-6 text-[var(--greendot-dark)]">
        About Us
      </h3>
      <p class="text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
        Greendot Ng Foundation is a non-profit organization dedicated to supporting children, fighting cancer,
        empowering education, and providing welfare assistance to those in need. We believe every child deserves
        the right to health, happiness, and education.
      </p>
    </section>

    <!-- Our Work Section -->
    <section id="work" class="bg-white py-16 px-4">
      <h3 class="text-3xl font-semibold text-center mb-10 text-[var(--greendot-dark)]">
        Our Impact Areas
      </h3>
      <div class="grid md:grid-cols-3 gap-8 container mx-auto">
        <div class="p-6 bg-[var(--greendot-light)] rounded-xl shadow-md text-center">
          <h4 class="text-xl font-bold mb-2 text-[var(--greendot-primary)]">Child Education</h4>
          <p>We sponsor educational materials and tuition for children in need.</p>
        </div>
        <div class="p-6 bg-[var(--greendot-light)] rounded-xl shadow-md text-center">
          <h4 class="text-xl font-bold mb-2 text-[var(--greendot-primary)]">Cancer Support</h4>
          <p>Offering medical and emotional support to families battling cancer.</p>
        </div>
        <div class="p-6 bg-[var(--greendot-light)] rounded-xl shadow-md text-center">
          <h4 class="text-xl font-bold mb-2 text-[var(--greendot-primary)]">Community Welfare</h4>
          <p>We run programs that promote health, clean water, and community development.</p>
        </div>
      </div>
    </section>

    <!-- Donation Section with Paystack Integration -->
    <section id="donate" class="bg-[var(--greendot-primary)] text-white py-16 px-4 text-center">
      <h3 class="text-3xl font-semibold mb-4">Support Our Mission</h3>
      <p class="mb-8 max-w-2xl mx-auto">
        Your donation makes a real difference. Help us reach more lives and create sustainable change.
      </p>
      <form id="donationForm" class="max-w-md mx-auto space-y-4 bg-white text-gray-800 p-6 rounded-xl shadow-lg">
        <input type="text" id="donorName" placeholder="Full Name" required class="w-full border rounded px-3 py-2" />
        <input type="email" id="donorEmail" placeholder="Email Address" required class="w-full border rounded px-3 py-2" />
        <input type="number" id="donationAmount" placeholder="Amount (NGN)" required class="w-full border rounded px-3 py-2" />
        <button type="submit" class="w-full bg-[var(--greendot-primary)] text-white py-2 rounded hover:bg-[var(--greendot-dark)]">
          Donate Securely
        </button>
      </form>
    </section>

    <!-- Suggestions / Updates Section -->
    <section id="suggestions" class="container mx-auto py-16 px-4">
      <h3 class="text-3xl font-semibold text-center mb-6 text-[var(--greendot-dark)]">Upcoming Improvements & Updates</h3>
      <ul class="max-w-3xl mx-auto list-disc list-inside text-gray-700 space-y-3">
        <li>Launch mobile-friendly menu (now included!)</li>
        <li>Improve SEO for better visibility on Google.</li>
        <li>Integrate real-time donation tracking and donor recognition wall.</li>
        <li>Develop mobile app for volunteering and donations.</li>
        <li>Optimize images and assets for faster loading.</li>
      </ul>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-[var(--greendot-light)] py-16 px-4 text-center">
      <h3 class="text-3xl font-semibold mb-4 text-[var(--greendot-dark)]">Get in Touch</h3>
      <p class="mb-4">Email: <a href="mailto:greendotfoundation@gmail.com" class="text-[var(--greendot-primary)] underline">greendotfoundation@gmail.com</a></p>
      <p>Phone: <a href="tel:+2348012345678" class="text-[var(--greendot-primary)] underline">+234 801 234 5678</a></p>
    </section>

    <!-- Footer -->
    <footer class="bg-[var(--greendot-dark)] text-white text-center py-6">
      <p>&copy; 2025 Greendot Ng Foundation. All rights reserved.</p>
    </footer>

    <!-- JavaScript -->
    <script>
      // Mobile menu toggle
      document.getElementById("menu-btn").addEventListener("click", () => {
        document.getElementById("mobile-menu").classList.toggle("hidden");
      });

      // Paystack integration
      const donationForm = document.getElementById("donationForm");
      donationForm.addEventListener("submit", payWithPaystack);

      function payWithPaystack(e) {
        e.preventDefault();

        let handler = PaystackPop.setup({
          key: "pk_test_yourPublicKeyHere", // Replace with your Paystack public key
          email: document.getElementById("donorEmail").value,
          amount: document.getElementById("donationAmount").value * 100,
          currency: "NGN",
          ref: "" + Math.floor(Math.random() * 1000000000 + 1),
          metadata: {
            custom_fields: [
              {
                display_name: "Donor Name",
                variable_name: "donor_name",
                value: document.getElementById("donorName").value,
              },
            ],
          },
          callback: function (response) {
            alert("Thank you for your donation! Payment successful. Ref: " + response.reference);
            donationForm.reset();
          },
          onClose: function () {
            alert("Transaction cancelled.");
          },
        });
        handler.openIframe();
      }
    </script>
  </body>
</html>