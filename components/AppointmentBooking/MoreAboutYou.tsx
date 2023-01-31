import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { ReferPartnerTypes } from "../../types";
import { dayOptions, monthOptions, serverUrl, yearOptions } from "../../utils";
import { Button } from "../Button";
import PhoneNumberInput from "../PhoneNumberInput";
import RadioInput from "../RadioInput";
import SelectForm from "../SelectForm";

export const MoreAboutYou = ({ setTabId }: ReferPartnerTypes) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [optOut, setOptOut] = useState(false);
  const [avoidCalling, setAvoidCalling] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState<any>("");
  const [selected, setSelected] = useState(null);
  const [covidSelected, setCovidSelected] = useState(null);
  const [exposedSelected, setExposedSelected] = useState(null);
  const [sexSelected, setSexSelected] = useState(null);
  const [memberSelected, setMemberSelected] = useState(null);
  const [genderTodaySelected, setGenderTodaySelected] = useState(null);
  const [vaccinationStatusSelected, setVaccinationStatusSelected] =
    useState(null);
  const [day, setDay] = useState(null);
  const [month, setMonth] = useState(null);
  const [year, setYear] = useState(null);
  const [noSymptoms, setNoSymptoms] = useState(false);
  const clearCookies = () => {
    Cookies.remove("help_center_id");
    Cookies.remove("userId");
    Cookies.remove("type");
    Cookies.remove("day");
    Cookies.remove("time");
    Cookies.remove("location");
  };
  const submitLocationData = (appointmentData: any) => {
    return axios.post(`${serverUrl}/appointments`, appointmentData);
  };
  const handleMutate = useMutation(submitLocationData, {
    onSuccess: (data) => {
      console.log("appointment booked: ", data);
      clearCookies();
      setTabId(5);
    },
    onError: (error) => {
      console.log("error: ", error);
    },
  });
  const handleClick = () => {
    const info = {
      help_centre_id: Cookies.get("help_center_id"),
      user_id: Cookies.get("userId"),
      type: Cookies.get("type"),
      day: Cookies.get("day"),
      time: Cookies.get("time"),
      dob: `${year}-${month}-${day}`,
      gender_at_birth: sexSelected === "Male" ? "M" : "F",
      gender_today: genderTodaySelected,
      appt_for: selected,
      name: name,
      phone: phoneNumber,
      location: Cookies.get("location"),
      avoid_calling: avoidCalling ? 1 : 0,
      covid_exposed: noSymptoms ? 0 : 1,
      optout_sms: optOut ? 1 : 0,
    };
    handleMutate.mutate(info);
  };
  const options = ["Myself", "My child", "Someone else"];
  const sexOptions = ["Male", "Female"];
  const genderTodayOptions = [
    "Male",
    "Female",
    "Transgender",
    "Rather not say",
  ];
  const vaccinationStatusOptions = [
    "Not vaccinated",
    "Partially vaccinated",
    "Fully vaccinated",
  ];
  const exposedOptions = ["Yes", "No"];
  const covidOptions = [
    "None",
    "Sore throat",
    "Cough",
    "Fatigue",
    "Loss of smell or taste or appetite",
    "Shortness of breath or chest pains",
    "Fever or feeling of chills",
  ];
  const memberOptions = [
    "Gay, bisexual man or other man who has sex with men",
    "Sex worker",
    "Injecting drug user",
    "Living with HIV",
    "Person who paid for sex recently",
    "Person in a prison or jail sometime in the last 6 months",
    "Rather not say",
    "None of the above",
  ];

  const [showSymptomCard, setShowSymptomCard] = useState(false);

  useEffect(() => {
    if (
      covidSelected === "None" &&
      exposedSelected === "No" &&
      vaccinationStatusSelected === "Not vaccinated"
    ) {
      setNoSymptoms(true);
      setShowSymptomCard(true);
    } else if (
      covidSelected === "None" &&
      exposedSelected === "Yes" &&
      vaccinationStatusSelected === "Not vaccinated"
    ) {
      setNoSymptoms(false);
      setShowSymptomCard(true);
    } else {
      setShowSymptomCard(false);
    }
  }, [covidSelected, exposedSelected, vaccinationStatusSelected]);

  return (
    <div className="mt-[54px] flex flex-col items-center">
      <h1 className="font-semibold text-[20px] text-center">
        Contact information
      </h1>
      <div className="mt-[30px] w-full">
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
          <div>
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              1. I am booking an appointment for
            </p>
            <RadioInput
              options={options}
              value={selected}
              onChange={setSelected}
            />
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              3. Phone number
            </p>
            <PhoneNumberInput
              placeholder="080 0000 0000"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
          </div>
          <div>
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              2. Name or nickname
            </p>
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name or nickname"
              className="h-[56px]  w-full  p-[20px] border-white4 border-[2px] rounded-[10px] mb-[20px]"
              type="text"
            />
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              4. Email Address
            </p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="h-[56px]  w-full  p-[20px] border-white4 border-[2px] rounded-[10px] mb-[20px]"
              type="email"
            />
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              5. Communication preferences (optional)
            </p>
            <p className="text-[14px] font-medium opacity-70 tracking-[0.3px] text-black1">
              The options below allow you to opt out of SMS communications and
              request not to be called on your phone number.
            </p>
            <div className="mt-[13px]">
              <input
                onChange={(e) => setOptOut(e.target.checked)}
                type="checkbox"
                value="Opt-out of SMS for this appointment"
                className="appearance-none checked:bg-blue-500 rounded-[4px] border-[1.5px] border-grey9"
              />
              <label className="ml-[13px] font-medium text-black1 lg:text-[15px] text-[14px]">
                Opt-out of SMS for this appointment
              </label>
            </div>
            <div className="mt-[13px]">
              <input
                onChange={(e) => setAvoidCalling(e.target.checked)}
                type="checkbox"
                value="Avoid calling my phone number"
                className="appearance-none checked:bg-blue-500 rounded-[4px] border-[1.5px] border-grey9"
              />
              <label className="ml-[13px] font-medium text-black1 lg:text-[15px] text-[14px]">
                Avoid calling my phone number
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[600px] mt-[43px]">
        <h1 className="font-semibold text-[20px] text-center">
          COVID-19 Self-Screening
        </h1>
        <p className="text-[14px] font-medium opacity-70 tracking-[0.3px] text-black1 text-center mt-[13px]">
          We want to keep you and service providers safe from COVID-19. Take
          this 3-question screening survey so we can better prepare service
          providers for your appointment.
        </p>
      </div>
      <div className="mt-[30px] w-full">
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
          <div>
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              1. I am booking an appointment for
            </p>
            <RadioInput
              options={covidOptions}
              value={covidSelected}
              onChange={setCovidSelected}
            />
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              3. What is your COVID-19 vaccination status?
            </p>
            <RadioInput
              options={vaccinationStatusOptions}
              value={vaccinationStatusSelected}
              onChange={setVaccinationStatusSelected}
            />
          </div>
          <div>
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              2. Were you exposed to anyone that was confirmed as COVID-19
              positive in the last 14 days?
            </p>
            <RadioInput
              options={exposedOptions}
              value={exposedSelected}
              onChange={setExposedSelected}
            />
          </div>
        </div>
      </div>
      {showSymptomCard && (
        <div
          className={`card mt-[21px] rounded-[20px] shadow-3xl px-[19px] py-[16px] ${
            noSymptoms ? "border-green4" : "border-red2"
          } border-2 w-full mb-[40px]`}
        >
          <div
            className={`${
              noSymptoms ? "border-green4" : "border-red2"
            } border-l-4 lg:px-[52px] px-[30px]`}
          >
            <p className="text-[14px] font-normal py-[20px]">
              {noSymptoms
                ? "No symptoms or potential exposure to COVID-19 reported."
                : "You reported a potential symptom or exposure to COVID-19. We will share this information with your service provider so they may provide you services with the necessary precautions."}
            </p>
          </div>
        </div>
      )}
      <h1 className="font-semibold text-[20px] text-center">More about you</h1>
      <div className="mt-[30px] w-full">
        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
          <div>
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              1. Please enter date of birth
            </p>
            <div className="grid grid-cols-3 gap-4 mb-[40px] lg:w-[50ch]">
              <SelectForm
                options={dayOptions}
                placeholder="Day"
                onChange={(selected) => setDay(selected.value)}
              />
              <SelectForm
                options={monthOptions}
                placeholder="Month"
                onChange={(selected) => setMonth(selected.value)}
              />
              <SelectForm
                options={yearOptions}
                placeholder="Year"
                onChange={(selected) => setYear(selected.value)}
              />
            </div>
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              3. How do you identify your gender today?
            </p>
            <RadioInput
              options={genderTodayOptions}
              value={genderTodaySelected}
              onChange={setGenderTodaySelected}
            />
          </div>
          <div>
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              2. What is your sex at birth?
            </p>
            <RadioInput
              options={sexOptions}
              value={sexSelected}
              onChange={setSexSelected}
            />
            <p className="text-black font-medium lg:text-[17px] text-[16px] mb-[10px]">
              4. Are you a member of any of these populations? (Select all that
              apply)
            </p>
            <RadioInput
              options={memberOptions}
              value={memberSelected}
              onChange={setMemberSelected}
            />
          </div>
        </div>
      </div>
      <div className="flex mt-[30px]">
        <Button
          onClick={() => setTabId(1)}
          variant="default"
          className="mr-[20px]"
        >
          Back
        </Button>
        <Button onClick={handleClick} variant="primary">
          Next
        </Button>
      </div>
    </div>
  );
};
