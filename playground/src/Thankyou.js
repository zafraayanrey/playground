import React from "react";
import Buttons from "./Buttons";
import { Link } from "react-router-dom";

function Thankyou() {
  return (
    <div className="bookingSuccess">
      <div className="bookingHeading">
        We received your information. Meantime please take time to read the
        terms and conditions
      </div>
      <div className="bookingTerms">
        <ol>
          <li>
            You are responsible for the use of the rented items. You assume all
            risks inherent to the operation and use of rented items, and agree
            to indemnify INNZ KIDDIE PLAYGROUND, its owner and employees from
            all claims for damage to property or bodily injury (including death)
            resulting from the use, operation or possession of the items,
            whether or not it be claimed or found that such damage or injury
            resulted in a whole or part from INNZ KIDDIE PLAYGROUND negligence,
            from the defective condition of the items, or any other cause.
          </li>
          <li>
            Renter agrees that the items will only be used at the address listed
            above on this agreement and only for the purpose for which it was
            intended. Subleasing is prohibited and that safety rules shall be
            observed at all times.
          </li>
          <li>
            Renter is responsible for the equipment from the starting time of
            rental as stated above on this agreement. Renter’s right of
            possession terminates 5 hours after the start time of rental unless
            if extension was agreed in advance. If in any case a rental
            extension is required, an extension fee of 800 pesos per hour will
            apply. Renter assumes the entire risk of loss, regardless of cause.
            If items are lost, stolen, damaged, renter will assume cost of
            replacement or repair, including labor costs.
          </li>
          <li>
            Renter shall pay a reasonable cleaning charges if items are returned
            unfit due to non-compliance of the safety rules attached on this
            page.
          </li>
          <li>
            Renter shall pay a 50% non-refundable deposit at time of reservation
            via our payment channels indicated below unless otherwise discussed
            with INNZ KIDDIE PLAYGROUND officer. Further, any type of
            cancellation due to power interruption or fortuitous events does not
            guarantee a refund of the deposit. The remaining 50% shall be paid
            in full before or during the party set-up. Damage or cleaning fees
            if applicable shall be paid right after the event.
          </li>
          <li className="paymentDetails">
            Cash: Please pay directly to any of our authorized staff in uniform.
            <p>GCash: 0906-0484-373</p>
            <p>Account Name: Nympha Zafra</p>
            <p>BDO Account #: 007618001490</p>
            <p>Account Name: Nympha Zafra</p>
          </li>
          <li>
            Renter agrees to have site cleaned and ready prior to installation
            of rented items.
          </li>
          <li>
            Renter agrees prior to any installation of rental equipment to
            obtain at renters expense, any and all necessary permits, licenses
            and other consents which will be needed, if applicable, for our
            equipment to be installed in the venue of event.
          </li>
          <li>
            Renter agrees to disclose the area condition of the venue of event
            if said venue is not known to INNZ KIDDIE PLAYGROUND. Area condition
            includes the space area, subsurface condition of the ground, and
            other conditions that will have a great impact on the viability or
            safety of the rented equipment in the event or location per se.
          </li>
          <li>
            Renter agrees all risk, and agrees to hold INNZ KIDDIE PLAYGROUND
            and any of its staff harmless from and against any and all claims,
            losses, liabilities, and damage, and all costs and expenses arising
            directly and indirectly at or relating to; The delivery, loading,
            unloading, erection, installation, dismantling, and use of rented
            equipment.{" "}
          </li>
          <li>
            This agreement constitutes the entire agreement between the Renter
            and INNZ KIDDIE PLAYGROUND and supersedes any prior understanding or
            representation of any kind preceding the date of this agreement.
            There are no other promises, conditions, understanding or other
            agreements, whether oral or written, relating to the subject matter
            of this agreement. This agreement may be modified in writing and
            must be signed by both the Renter and INNZ KIDDIE PLAYGROUND
          </li>
        </ol>
      </div>
      <Buttons>
        <Link to="/">Home</Link>
      </Buttons>
    </div>
  );
}

export default Thankyou;
