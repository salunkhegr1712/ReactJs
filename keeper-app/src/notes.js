const notes = [
    {
      key: 1,
      title: " Machine Learning",
      content:
        "From translation apps to autonomous vehicles, all powers with Machine Learning. It offers a way to solve problems and answer complex questions. It is basically a process of training a piece of software called an algorithm or model, to make useful predictions from data. This article discusses the categories of machine learning problems, and terminologies used in the field of machine learning."
    },
    {
      key: 2,
      title: "Java",
      content:
        "Java is one of the most popular and widely used programming languages.Java has been one of the most popular programming languages for many years.Java is Object Oriented. However, it is not considered as pure object-oriented as it provides support for primitive data types (like int, char, etc)The Java codes are first compiled into byte code (machine-independent code). Then the byte code runs on Java Virtual Machine (JVM) regardless of the underlying architecture.Java syntax is similar to C/C++. But Java does not provide low-level programming functionalities like pointers. Also, Java codes are always written in the form of classes and objects.",
    },
    {
      key: 3,
      title: "Data Structure",
      content:
        "A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed. So we must have good knowledge about data structures. "
    },
    {
      key: 4,
      title: "Algorithms",
      content:
        "A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.A data structure is not only used for organizing the data. It is also used for processing, retrieving, and storing data. There are different basic and advanced types of data structures that are used in almost every program or software system that has been developed. So we must have good knowledge about data structures. "
    },
    {
        key:5,
        title:"Socket Programming",
        content:"Sockets provide the communication mechanism between two computers using TCP. A client program creates a socket on its end of the communication and attempts to connect that socket to a server.When the connection is made, the server creates a socket object on its end of the communication. The client and the server can now communicate by writing to and reading from the socket.The java.net.Socket class represents a socket, and the java.net.ServerSocket class provides a mechanism for the server program to listen for clients and establish connections with them.",
    },
    {
        key:6,
        title:"Byte Streams",
        content:"Java byte streams are used to perform input and output of 8-bit bytes. Though there are many classes related to byte streams but the most frequently used classes are, FileInputStream and FileOutputStream. ",
    },
    {
        key:7,
        title:"Character Streams",
        content:"Java Byte streams are used to perform input and output of 8-bit bytes, whereas Java Character streams are used to perform input and output for 16-bit unicode. Though there are many classes related to character streams but the most frequently used classes are, FileReader and FileWriter.",
    },
    {
        key:8,
        title:"Standard Streams",
        content:"All the programming languages provide support for standard I/O where the user's program can take input from a keyboard and then produce an output on the computer screen. If you are aware of C or C++ programming languages, then you must be aware of three standard devices STDIN, STDOUT and STDERR. ",
    },
  ];
  
export default notes;