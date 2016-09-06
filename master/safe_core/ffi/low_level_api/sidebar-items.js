initSidebarItems({"mod":[["cipher_opt","Low level manipulation of Pub/PrivAppendableData Cipher Options"],["data_id","DataIdentifier constructions and freeing"],["immut_data","Low level manipulation of ImmutableData"],["struct_data","Low level manipulation of StructuredData"]],"type":[["AppendableDataHandle","Disambiguating ObjectHandle"],["CipherOptHandle","Disambiguating ObjectHandle"],["DataIdHandle","Disambiguating ObjectHandle"],["EncryptKeyHandle","Disambiguating ObjectHandle"],["ObjectHandle","Object handle associated with objects. In normal C API one would expect rust code to pass pointers to opaque object to C. C code would then need to pass these pointers back each time they needed rust code to execute something on those objects. However our code base deals with communication over Web framework (like WebServers for instance). Hence it is not possible to pass pointers to remote apps interfacing with us. Pointers represent handle to actual object. Using similar concept, we instead pass ObjectHandle type over Web interface and manage the objects ourselves. This leads to extra type and memory safety and no chance of Undefined Behaviour. Passing of pointer handles to C is replaced by passing of ObjectHandle to remote apps which they will use to do RPC's."],["SelfEncryptorReaderHandle","Disambiguating ObjectHandle"],["SelfEncryptorWriterHandle","Disambiguating ObjectHandle"],["SignKeyHandle","Disambiguating ObjectHandle"],["StructDataHandle","Disambiguating ObjectHandle"]]});