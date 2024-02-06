import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function Formular({ setActiv }) {
  const [on, setOn] = useState(false);
  return (
    <div>
      <div className="background-form"></div>
      <form className="form">
        {on === true ? (
          <div>
            <div class="circle-wrapper">
              <div class="success circle"></div>
              <div class="icon">✔</div>
            </div>
            <h1 className="tg-form">Formularul tau a fost trimis!</h1>
            <p className="inf-form">
              Pentru mai multe detalii ne puteti contacta la{" "}
              <span className="nr-tel">0761 111 111</span>
            </p>
            <Link className="ck-form" onClick={() => setActiv(false)}>
              Close
            </Link>
          </div>
        ) : (
          <div className="input-form">
            <div className="input-info">
              <button className="ck-form1" onClick={() => setActiv(false)}>
                X
              </button>
              <h1 className="form-title">Formular</h1> <br />
              <h3 className="form-txt">Nume si prenume</h3>
              <input
                className="text-i"
                type="text"
                placeholder="Adauga nume si prenume"
              />
              <h3 className="form-txt">Alege locatia de preluare</h3>
              <select className="text-i category">
                <option className="form-placeholder" value="">
                  Selecteaza locatia de preluare
                </option>
                <option value="S1">Bucuresti Sectorul 1</option>
                <option value="S2">Bucuresti Sectorul 2</option>
                <option value="S3">Bucuresti Sectorul 3</option>
                <option value="S4">Bucuresti Sectorul 4</option>
                <option value="S5">Bucuresti Sectorul 5</option>
                <option value="S6">Bucuresti Sectorul 6</option>
              </select>
            </div>
            <div className="input-columns">
              <div className="input-prel">
                <h3 className="form-txt">Data si ora preluare</h3>
                <input className="text-b date" type="date" required />
                <div className="watch">
                  <select className="text-b hours">
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                  </select>
                  :
                  <select className="text-b minutes">
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                  </select>
                </div>
                <select className="text-b category">
                  <option className="form-placeholder" value="" required>
                    Selecteaza categoria ta de permis
                  </option>
                  <option value="AM">AM</option>
                  <option value="A1">A1</option>
                  <option value="B1">B1</option>
                  <option value="A2">A2</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="BE">BE</option>
                  <option value="C">C</option>
                  <option value="CE">CE</option>
                  <option value="D">D</option>
                  <option value="DE">DE</option>
                </select>
                <div className="checkbox-container">
                  <input className="ck-p" type="checkbox" required />
                  <p className="info-p">
                    Am permisul de conducere de cel putin un an
                  </p>
                </div>
              </div>

              <div className="input-pred">
                <h3 className="form-txt">Data si ora predare</h3>
                <input className="text-b date" type="date" required />
                <div className="watch">
                  <select className="text-b hours">
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                  </select>
                  :
                  <select className="text-b minutes" required>
                    <option value="00">00</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    <option value="32">32</option>
                    <option value="33">33</option>
                    <option value="34">34</option>
                    <option value="35">35</option>
                    <option value="36">36</option>
                    <option value="37">37</option>
                    <option value="38">38</option>
                    <option value="39">39</option>
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                    <option value="49">49</option>
                    <option value="50">50</option>
                    <option value="51">51</option>
                    <option value="52">52</option>
                    <option value="53">53</option>
                    <option value="54">54</option>
                    <option value="55">55</option>
                    <option value="56">56</option>
                    <option value="57">57</option>
                    <option value="58">58</option>
                    <option value="59">59</option>
                  </select>
                  <img src="" alt="" />
                </div>{" "}
                <input
                  className="text-i nr-ph"
                  type="number"
                  placeholder="Adauga numarul de telefon"
                  required
                />
                <input
                  className="text-i"
                  type="email"
                  placeholder="Adauga adresa de email"
                  required
                />
              </div>
            </div>
            <div className="submit-container">
              <button className="ck-input" onClick={() => setOn(true)}>
                Trimite formularul
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

export default Formular;
