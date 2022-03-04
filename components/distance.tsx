const commutesPerYear = 260 * 2;
const litresPerKM = 14 / 100;
const gasLitreCost = 1.5 * 100;
const litreCostKM = litresPerKM * gasLitreCost;
const secondsPerDay = 60 * 60 * 24;

type DistanceProps = {
  leg: google.maps.DirectionsLeg;
};

export default function Distance({ leg }: DistanceProps) {
  if (!leg.distance || !leg.duration) return null;

  const days = Math.floor(
    commutesPerYear * leg.duration.value / secondsPerDay
  );
  const cost = Math.floor(
    (leg.distance.value / 1000) * litreCostKM * commutesPerYear
  );

  return <div>
    {/* <p>
      This home is <span className="highlight">{leg.distance.text} </span>away from your office.
      That would take <span className="highlight">{leg.duration.text}</span>each direction
    </p>
    <p>
      That's <span className="highlight">{days} days</span> in your car each year at a cost of {" "}
      <span className="highlight">
        ¥{new Intl.NumberFormat().format(cost)}
      </span>
      .
    </p> */}

    <p>
      自宅から 会社まで<span className="highlight">{leg.distance.text} </span>あります。{" "} <br />
      片道 <span className="highlight">{leg.duration.text}</span>かかります。<br />
    </p>
    <p>
      それは、1年のうち<span className="highlight">{days} 日間</span> 車に乗ってることになります。<br /> {" "}
      ガソリン代は
      <span className="highlight">
        ¥{new Intl.NumberFormat().format(cost)}
      </span>
      です。
    </p>


  </div >;
}
