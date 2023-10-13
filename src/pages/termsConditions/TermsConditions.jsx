import React, { useContext } from "react";

import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";

const TermsConditions = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <div>
      <Helmet title="Web Tech Services || Terms and conditions" />
      <div className="flex justify-center">
        {loading && <span className="loading loading-ring loading-lg"></span>}
      </div>
      <SectionTitle title="Acceptance of Terms" />
      <p>
        By accessing and using the services provided by Web Tech Services, you
        agree to abide by and comply with these Terms and Conditions. If you do
        not agree with any part of these terms, you should not use our services.
      </p>
      <SectionTitle title="1. Description of Services" />
      <p>
        Web Tech Services provides a range of technology-related services,
        including but not limited to web development, software development, IT
        consulting, and digital marketing. The specifics of these services will
        be outlined in individual service agreements or project proposals.
      </p>
      <SectionTitle title="2. Privacy Policy" />
      <p>
        Your use of our services is also governed by our Privacy Policy, which
        outlines how we collect, use, and protect your personal information. You
        can review our Privacy Policy separately on our website.
      </p>

      <SectionTitle title="3. Service Agreements" />
      <p>
        For certain services, you may be required to enter into separate Service
        Agreements or Project Contracts, which will detail the scope of work,
        timelines, fees, and other relevant terms and conditions. These
        agreements will take precedence over these general Terms and Conditions.
      </p>

      <SectionTitle title="4. User Responsibilities" />
      <p>
        <ul className="list-disc list-inside">
          <li>
            You agree to provide accurate and up-to-date information when using
            our services.
          </li>
          <li>
            You are responsible for maintaining the confidentiality of your
            account information, including passwords.
          </li>
          <li>
            You agree not to engage in any unlawful or harmful activities when
            using our services.
          </li>
          <li>
            You agree not to use our services to distribute spam or engage in
            any other forms of abusive behavior.
          </li>
        </ul>
      </p>
      <SectionTitle title="5. Intellectual Property" />
      <p>
        Any content, materials, or intellectual property provided by Web Tech
        Services in the course of our services remain the property of Web Tech
        Services unless otherwise stated in a separate agreement.
      </p>
      <SectionTitle title="6. Payment and Fees" />
      <p>
        Payment terms and fees for our services will be outlined in the
        applicable Service Agreement or Project Contract. Late payments may
        incur penalties.
      </p>
      <SectionTitle title="7.Termination" />
      <p>
        Web Tech Services reserves the right to terminate your access to our
        services at our discretion, with or without cause. You may also
        terminate your use of our services at any
      </p>
      <SectionTitle title="8.Disclaimer of Warranties" />
      <p>
        Our services are provided "as-is," without warranties of any kind,
        whether expressed or implied. We make no representations regarding the
        accuracy, reliability, or availability of our services.
      </p>

      <SectionTitle title="9.  Limitation of Liability" />

      <p>
        Web Tech Services shall not be liable for any direct, indirect,
        incidental, consequential, or punitive damages arising out of your use
        or inability to use our services.
      </p>

      <SectionTitle title="10.Changes to Terms and Conditions" />
      <p>
        Web Tech Services reserves the right to update or modify these Terms and
        Conditions at any time. It is your responsibility to review them
        periodically for changes.
      </p>
      <SectionTitle title="11. Governing Law" />
      <p>
        These Terms and Conditions shall be governed by and construed in
        accordance with the laws of [Your Jurisdiction].
      </p>
      <SectionTitle title="12.Contact Information" />
      <p>
        If you have any questions or concerns about these Terms and Conditions,
        please contact us at [Contact Email Address].
      </p>
    </div>
  );
};

export default TermsConditions;
