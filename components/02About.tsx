import Image from "next/image";

const About = (): JSX.Element => {
  return (
    <>
      <Image
        src={"https://images.pexels.com/photos/56857/animal-cat-kitten-funny-56857.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
        width={800}
        height={600}
        alt="yawning"
      ></Image>
      <h3>あくびってうつりませんか？</h3>
      <p>
        友達・家族につられて あくびをしてしまった。 大事な会議中。
        上司にあくびをうつしてしまった。
        自分の意思に反してうつり・うつってしまう「あくび」
        Yawningはあくびを繋ぐことで人にうつす体験ができる
        新時代のあくびネットワークです。
      </p>
      <style jsx>{``}</style>
    </>
  );
};

export default About;
